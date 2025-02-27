const registryItems = [
    {
      id: 1,
      name: "Personalized Matouk Robe: Hers",
      price: "$180",
      images: [
      "https://matouk-website.imgix.net/spree/products/7766/original/Milagro_Robe_White_primary.png?1612825495?auto=format",
      "https://matouk-website.imgix.net/product_category_style_relation_images/images/000/000/071/regular/Bath_Gallery_Milagro_Robe_2023.jpg?1672869636",
      "https://matouk-website.imgix.net/product_category_style_relation_images/images/000/000/033/regular/Bath_Style_Gallery_Milagro_robe_22.jpg?1661955163",
    ],
      storeLink: "https://www.matouk.com/products/milagro-robe?color=White&size=Small",
      customization: "For Gladys: Select & apply 'White' color, choose size 'S', monogram with 'GCA' in 'White' thread, monogram style '2006', placement chest, monogram size 3.5",
      markedPurchased: false,
    },
    {
        id: 2,
        name: "Personalized Matouk Robe: His",
        price: "$180",
        images: [
        "https://matouk-website.imgix.net/spree/products/12022/original/Milagro_robe_night_01_RESIZE.png?1697741534?auto=format",
        "https://matouk-website.imgix.net/product_category_style_relation_images/images/000/000/071/regular/Bath_Gallery_Milagro_Robe_2023.jpg?1672869636",
        "https://matouk-website.imgix.net/product_category_style_relation_images/images/000/000/033/regular/Bath_Style_Gallery_Milagro_robe_22.jpg?1661955163",
      ],
        storeLink: "https://www.matouk.com/products/milagro-robe?color=Night&size=Small",
        customization: "For Kyle: Select & apply 'Night' color, choose size 'S', monogram with 'KCJ' in 'Night' thread, monogram style '2006', placement chest, monogram size 3.5",
        markedPurchased: false,
      },
      {
        id: 3,
        name: "Matouk Milagro Bath Rug",
        price: "$135",
        images: [
            "https://matouk-website.imgix.net/spree/products/3105/original/Milagro_bath_rug_white_primary.png?1523643228?auto=format"
      ],
        storeLink: "https://www.matouk.com/products/milagro-rug?color=White",
        customization: " Select & apply 'White' color, choose size 'Small', Requesting 5",
        markedPurchased: false,
      },
    {
      id: 4,
      name: "Burgundy Etoile Vanity Case ",
      price: "$90-$100",
      images: ["https://us.etoile.com/cdn/shop/files/VanityCaseBurgundyNEW_2048x2048.png?v=1725197692"],
      storeLink: "https://us.etoile.com/products/vanity-case?variant=47433424339137",
      customization: 'Pre-order in Burgundy (Duo or Vanity). If unavailable, select Duo in White or Black.',
      markedPurchased: false,
    },
    {
        id: 5,
        name: "Polspotten- set of 6 Multi wine glasses ",
        price: "$180",
        images: ["https://images.lvrcdn.com/Zoom/c/p/73I/KEG/010/5f736a43-c85b-43aa-ba59-fc25e4f6c12520231201233502.JPG","https://images.lvrcdn.com/Zoom/c/p/73I/KEG/010/63101590-379f-444f-aee6-d3e00168966f20231201233447.JPG"],
        storeLink: "https://www.luisaviaroma.com/en-us/p/polspotten/home/75I-KEG097?ColorId=TVVMVElDT0xPUg2&lvrid=_p_dKEG_ge&SizeTypeId=04&SizeId=1&from=gshop&utm_source=google&utm_medium=cpc&utm_campaign=US+-+Performance+Max+-+Google+Ads+-+Conversion+-+LVR+-++-++-++-+Google+Ads+-&gad_source=1&gclid=CjwKCAiAlPu9BhAjEiwA5NDSAw0ZaMuF5YF8lPQN-BWqtrLXe18jCdSX8DHqTyAQI4yn1kLEQnrLTRoCmqkQAvD_BwE&gclsrc=aw.ds",
        customization: null,
        markedPurchased: false,
      },
      {
        id: 6,
        name: "Polspotten- Peony set of 6 frosted water glasses",
        price: "$180",
        images: ["https://images.lvrcdn.com/Zoom/c/p/68I/WGX/026/a29743f4-84de-4ba9-af41-7cd4da0488d020231019150804.JPG","https://images.lvrcdn.com/Big/c/p/63I/KEG/026/eb9346da-e02f-46c9-9bd0-b0b9f95649cb20231019133327.JPG"],
        storeLink: "https://www.luisaviaroma.com/en-us/p/polspotten/home/79I-KEG021?ColorId=TVVMVElDT0xPVVI1&lvrid=_p_dKEG_ge",
        customization: null,
        markedPurchased: false,
      },
      {
        id: 7,
        name: "Villeroy & Boch- la Classica 5 piece Place Setting",
        price: "$186",
        images: ["https://cdn.saksfifthavenue.com/is/image/saks/0400019582148_NOCOLOR?wid=2000&hei=2667&resMode=sharp2&op_usm=0.9,1.0,8,0&fmt=webp"],
        storeLink: "https://www.saksfifthavenue.com/product/villeroy-boch-la-classica-5-piece-place-setting-0400019582148.html?dwvar_0400019582148_color=NO%20COLOR",
        customization: "Requesting 8 sets. The option will automatically disable once all 8 sets are purchased. Each set can be bought individually.",
        markedPurchased: false,
      },
      {
        id: 8,
        name: "Villeroy & Boch- Espresso Cup",
        price: "$18.99 x 2 sets",
        images: ["https://cdn.saksfifthavenue.com/is/image/saks/0400018587375_WHITE?wid=2000&hei=2667&resMode=sharp2&op_usm=0.9,1.0,8,0&fmt=webp","https://cdn.saksfifthavenue.com/is/image/saks/0400018587375_WHITE_A2?wid=534&hei=712&resMode=sharp2&op_usm=0.9,1.0,8,0&fmt=webp","https://cdn.saksfifthavenue.com/is/image/saks/0400018587375_WHITE_A1?wid=2000&hei=2667&resMode=sharp2&op_usm=0.9,1.0,8,0&fmt=webp"],
        storeLink: "https://www.saksfifthavenue.com/product/villeroy-boch-espresso-cup-0400018587375.html?dwvar_0400018587375_color=WHITE",
        customization: "Requesting 2 sets. The option will automatically disable once all 8 sets are purchased. Each set can be bought individually.",
        markedPurchased: false,
      },
      {
        id: 9,
        name: "Villeroy & Boch- NewWave Caffè Party Plate Small",
        price: "$13.99 x 2 sets",
        images: ["https://cdn.saksfifthavenue.com/is/image/saks/0400019111300_WHITE?wid=2000&hei=2667&resMode=sharp2&op_usm=0.9,1.0,8,0&fmt=webp","https://cdn.saksfifthavenue.com/is/image/saks/0400018587375_WHITE_A2?wid=534&hei=712&resMode=sharp2&op_usm=0.9,1.0,8,0&fmt=webp"],
        storeLink: "https://www.saksfifthavenue.com/product/villeroy-boch-newwave-caff%C3%A8-party-plate-small-0400019111300.html?dwvar_0400019111300_color=WHITE",
        customization: "Requesting 2 sets. The option will automatically disable once all 8 sets are purchased. Each set can be bought individually.",
        markedPurchased: false,
      },
      {
        id: 10,
        name: `Hillcrest White 12 Piece Dinnerware Set\n(4 person dining)`,
        price: "$495",
        images: ["https://assets.sohohome.com/cdn-cgi/image/fit=crop%2cformat=auto%2cquality=75%2cwidth=900%2cheight=1000%2ctrim=388%3b0%3b389%3b0/images/original/187073-79938270-listingjpg.jpg"],
        storeLink: "https://www.sohohome.com/us/products/hillcrest-12-piece-dinnerware-set-white/79938270",
        customization: "Requesting 2 Sets",
        markedPurchased: false,
      },

    // Add more registry items as needed
  ];
  
  export default registryItems;
  