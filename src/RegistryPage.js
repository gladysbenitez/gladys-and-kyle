import { useState, useEffect } from "react";
import "./RegistryPage.css";
import registryItems from "./data/registryItems";

// External store registry links
const registryHubs = [
  {
    name: "Frontgate",
    logo: "https://mma.prnewswire.com/media/1776302/FG_Logo.jpg?p=facebook",
    link: "https://www.frontgate.com/SharedWishListView?storeId=10053&catalogId=10053&langId=-1&externalId=17456580&wishTitle=GKWeddingRegistry&utm_medium=referral",
  },
  {
    name: "William Sonoma",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4WWHXw5YL1bBFB5cSJJ-0b_dUSfhCZesJXQUEs9u8oy2gtB0LtOeWHMgkzxVK8gceQ&usqp=CAU",
    link: "https://www.williams-sonoma.com/registry/9lxmzk2rdt/registry-list.html",
  },
  {
    name: "Amazon",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSElwZ6FRrGGiYGSKtM9HK-CnQgkEeHsQyCgO8pieMTc12Xg8VdW3IfePhcTRiFDFipA&usqp=CAU",
    link: "https://www.amazon.com/wedding/registry/3KP96CY77AXNN",
  },
  {
    name: "CB2",
    logo: "https://mma.prnewswire.com/media/1551057/Crate_and_Barrel_CB2_Logo.jpg?w=200",
    link: "https://www.cb2.com/gift-registry/gladys-benitez-and-kyle-cunningham/r7130559",
  },
];

export default function RegistryPage() {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState({});
  const [showForm, setShowForm] = useState(null);
  const [showRedirectModal, setShowRedirectModal] = useState(null);
  const [formData, setFormData] = useState({ guestName: "", quantity: 1 });
  const [showFrontgateModal, setShowFrontgateModal] = useState(false);

  const googleScriptURL =
    "https://script.google.com/macros/s/AKfycbwA2jvRt0guQU02bJbodFyIGo-XBY_kUDsmbYh7LsfqwslnFlb9-hzvbNjjlaY-HMAc/exec";

  useEffect(() => {
    const savedPurchasedItems =
      JSON.parse(localStorage.getItem("purchasedItems")) || {};
    const updatedItems = registryItems.map((item) => ({
      ...item,
      markedPurchased: savedPurchasedItems[item.id] || false,
    }));
    setItems(updatedItems);
  }, []);

  const markAsPurchased = (id) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, markedPurchased: true } : item
      );
      localStorage.setItem(
        "purchasedItems",
        JSON.stringify(
          updatedItems.reduce((acc, item) => {
            acc[item.id] = item.markedPurchased;
            return acc;
          }, {})
        )
      );
      return updatedItems;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.guestName.trim()) {
      alert("Please enter your name before submitting.");
      return;
    }

    const formURL = `${googleScriptURL}?guestName=${encodeURIComponent(
      formData.guestName
    )}&giftName=${encodeURIComponent(showForm.name)}&quantity=${encodeURIComponent(
      formData.quantity
    )}`;

    try {
      await fetch(formURL, { method: "POST", mode: "no-cors" });
      alert("Thank you! Your purchase has been recorded.");
      markAsPurchased(showForm.id);
      setShowForm(null);
    } catch (error) {
      alert("Error submitting the form. Please try again.");
    }
  };

  const handleProceedToSite = () => {
    if (showRedirectModal) {
      window.open(showRedirectModal.storeLink, "_blank");
      setShowRedirectModal(null);
    }
  };

  return (
    <div className="registry-page">
    <div className="registry-container">
      <h2 className="registry-title">Gifts We’d Love</h2>

      {/* Custom Registry Items */}
      <div className="registry-grid">
        {items.map((item) => (
          <div key={item.id} className="registry-item">
            <div className="image-gallery">
              <img
                src={selectedImage[item.id] || item.images[0]}
                alt={item.name}
                className="registry-image"
              />
              <div className="thumbnail-container">
                {item.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className={`thumbnail ${
                      selectedImage[item.id] === img ? "active" : ""
                    }`}
                    onClick={() =>
                      setSelectedImage({ ...selectedImage, [item.id]: img })
                    }
                  />
                ))}
              </div>
            </div>
            <h3 className="registry-item-title">{item.name}</h3>
            <p className="registry-item-price">{item.price}</p>
            {item.customization && (
              <p className="customization-note">
                <strong>Customization Instructions:</strong> {item.customization}
              </p>
            )}
            <button className="buy-button" onClick={() => setShowRedirectModal(item)}>
              Buy This Gift
            </button>
            <button
              onClick={() => setShowForm(item)}
              className={`mark-purchased ${
                item.markedPurchased ? "disabled" : ""
              }`}
              disabled={item.markedPurchased}
            >
              {item.markedPurchased ? "Purchased" : "Mark as Purchased"}
            </button>
          </div>
        ))}
      </div>

      {/* Buy This Gift Redirect Modal */}
      {showRedirectModal && (
        <div className="modal-overlay">
          <div className="form-modal">
            <h3 className="modal-title">You're Leaving This Page</h3>
            <p className="modal-text">
              You will now be directed to an external site to purchase this item. Please note that this site does <strong>not</strong> track purchases.
              <br /><br />
              Once you've completed your purchase, kindly return to this page and click <strong>"Mark as Purchased"</strong> to help us keep track. Thank you!
            </p>
            <button className="confirm-button" onClick={handleProceedToSite}>
              Proceed to {showRedirectModal.name} Website
            </button>
          </div>
        </div>
      )}

      {/* Mark as Purchased Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="form-modal">
            <h3 className="modal-title">Confirm Your Purchase</h3>
            <form onSubmit={handleSubmit} className="purchase-form">
              <label className="form-label">Your Name:</label>
              <input type="text" placeholder="Enter your name" value={formData.guestName} onChange={(e) => setFormData({ ...formData, guestName: e.target.value })} required />

              <label className="form-label">Gift:</label>
              <input type="text" value={showForm.name} readOnly />

              <label className="form-label">Quantity:</label>
              <input type="number" min="1" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} required />

              <button type="submit" className="confirm-button">Submit</button>
              <button type="button" className="cancel-button" onClick={() => setShowForm(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* External Store Registries Section */}
      <div className="registry-hubs-container">
        <h2 className="registry-hubs-title">Find Us on These Registries</h2>
        <div className="registry-hubs-grid">
          {registryHubs.map((hub, index) => (
            <a key={index} href={hub.link} target="_blank" rel="noopener noreferrer" className="registry-hub">
              <img src={hub.logo} alt={`${hub.name} Logo`} />
            </a>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
