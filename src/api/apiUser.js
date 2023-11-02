//http://api.devtoolstech.in/ecommerce/products

// export const apiProduct = {
//   fetch: async () =>
//     fetch("http://api.devtoolstech.in/ecommerce/products").then((resolve) =>
//       resolve.json()
//     ),
// };

export const apiProduct={
    fetch:()=>new Promise(resolve =>{ 
      setTimeout(()=>resolve([
        {
          "id": 1,
          "name": "Handcrafted Cotton Keyboard",
          "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
          "color": "black",
          "price": 615,
          "currency": "USD",
          "releaseDate": "2021-09-23T08:15:36.195Z",
          "categoryId": 2,
          "rating": 4
        },
        {
          "id": 2,
          "name": "Handcrafted Fresh Shirt",
          "image": "https://media.gq.com/photos/650d9aa873b15519c5c21ada/16:9/w_2560%2Cc_limit/best-clothing-brands-for-men.jpg",
          "color": "black",
          "price": 404,
          "currency": "USD",
          "releaseDate": "2021-09-22T18:52:52.949Z",
          "categoryId": 5,
          "rating": 2
        },
        {
          "id": 3,
          "name": "Sleek Steel Keyboard",
          "image": "https://images.inc.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
          "color": "white",
          "price": 64,
          "currency": "USD",
          "releaseDate": "2021-09-22T15:19:12.134Z",
          "categoryId": 1,
          "rating": 4
        },
        {
          "id": 4,
          "name": "Licensed Frozen Pizza",
          "image": "https://media.gq.com/photos/650d9aa873b15519c5c21ada/16:9/w_2560%2Cc_limit/best-clothing-brands-for-men.jpg",
          "color": "cyan",
          "price": 492,
          "currency": "USD",
          "releaseDate": "2021-09-23T04:12:25.601Z",
          "categoryId": 5,
          "rating": 3
        },
        {
          "id": 5,
          "name": "Ergonomic Frozen Mouse",
          "image": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-22790,resizemode-75,msid-101921733/top-trending-products/toys-and-games/best-educational-toys-for-kids-in-india-to-kickstart-their-learning-journey.jpg",
          "color": "silver",
          "price": 56,
          "currency": "USD",
          "releaseDate": "2021-09-22T13:30:14.337Z",
          "categoryId": 3,
          "rating": 5
        },
        {
          "id": 6,
          "name": "Practical Rubber Soap",
          "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
          "color": "gold",
          "price": 551,
          "currency": "USD",
          "releaseDate": "2021-09-23T08:48:53.479Z",
          "categoryId": 2,
          "rating": 3
        },
        {
          "id": 7,
          "name": "Refined Soft Chips",
          "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
          "color": "lavender",
          "price": 519,
          "currency": "USD",
          "releaseDate": "2021-09-22T23:35:15.339Z",
          "categoryId": 2,
          "rating": 5
        },
        {
          "id": 8,
          "name": "Incredible Rubber Towels",
          "image": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-22790,resizemode-75,msid-101921733/top-trending-products/toys-and-games/best-educational-toys-for-kids-in-india-to-kickstart-their-learning-journey.jpg",
          "color": "gold",
          "price": 627,
          "currency": "USD",
          "releaseDate": "2021-09-23T07:14:10.336Z",
          "categoryId": 3,
          "rating": 3
        },
        {
          "id": 9,
          "name": "Tasty Fresh Bacon",
          "image": "https://media.gq.com/photos/650d9aa873b15519c5c21ada/16:9/w_2560%2Cc_limit/best-clothing-brands-for-men.jpg",
          "color": "orchid",
          "price": 830,
          "currency": "USD",
          "releaseDate": "2021-09-23T06:02:26.785Z",
          "categoryId": 5,
          "rating": 1
        },
        {
          "id": 10,
          "name": "Handmade Rubber Bacon",
          "image": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-22790,resizemode-75,msid-101921733/top-trending-products/toys-and-games/best-educational-toys-for-kids-in-india-to-kickstart-their-learning-journey.jpg",
          "color": "maroon",
          "price": 862,
          "currency": "USD",
          "releaseDate": "2021-09-22T21:59:37.191Z",
          "categoryId": 3,
          "rating": 5
        },
        {
          "id": 11,
          "name": "Licensed Granite Salad",
          "image": "https://images.inc.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
          "color": "lavender",
          "price": 828,
          "currency": "USD",
          "releaseDate": "2021-09-22T21:31:33.210Z",
          "categoryId": 1,
          "rating": 3
        },
        {
          "id": 12,
          "name": "Licensed Frozen Chips",
          "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
          "color": "maroon",
          "price": 354,
          "currency": "USD",
          "releaseDate": "2021-09-23T10:13:54.718Z",
          "categoryId": 2,
          "rating": 3
        },
        {
          "id": 13,
          "name": "Rustic Concrete Towels",
          "image": "https://media.gq.com/photos/650d9aa873b15519c5c21ada/16:9/w_2560%2Cc_limit/best-clothing-brands-for-men.jpg",
          "color": "yellow",
          "price": 149,
          "currency": "USD",
          "releaseDate": "2021-09-22T22:19:11.964Z",
          "categoryId": 5,
          "rating": 2
        },
        {
          "id": 14,
          "name": "Awesome Soft Cheese",
          "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
          "color": "mint green",
          "price": 138,
          "currency": "USD",
          "releaseDate": "2021-09-23T10:28:49.258Z",
          "categoryId": 2,
          "rating": 3
        },
        {
          "id": 15,
          "name": "Sleek Concrete Ball",
          "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
          "color": "mint green",
          "price": 761,
          "currency": "USD",
          "releaseDate": "2021-09-23T05:12:28.999Z",
          "categoryId": 2,
          "rating": 3
        },
        {
          "id": 16,
          "name": "Licensed Granite Car",
          "image": "https://www.healthcareitnews.com/sites/hitn/files/Global%20healthcare_2.jpg",
          "color": "black",
          "price": 163,
          "currency": "USD",
          "releaseDate": "2021-09-22T20:11:33.107Z",
          "categoryId": 4,
          "rating": 5
        },
        {
          "id": 17,
          "name": "Small Soft Salad",
          "image": "https://images.inc.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
          "color": "fuchsia",
          "price": 838,
          "currency": "USD",
          "releaseDate": "2021-09-23T03:19:33.321Z",
          "categoryId": 1,
          "rating": 4
        },
        {
          "id": 18,
          "name": "Awesome Soft Soap",
          "image": "https://www.healthcareitnews.com/sites/hitn/files/Global%20healthcare_2.jpg",
          "color": "ivory",
          "price": 690,
          "currency": "USD",
          "releaseDate": "2021-09-23T05:50:06.856Z",
          "categoryId": 4,
          "rating": 2
        },
        {
          "id": 19,
          "name": "Small Granite Towels",
          "image": "https://images.inc.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
          "color": "teal",
          "price": 978,
          "currency": "USD",
          "releaseDate": "2021-09-22T18:33:26.350Z",
          "categoryId": 1,
          "rating": 3
        },
        {
          "id": 20,
          "name": "Intelligent Granite Towels",
          "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
          "color": "blue",
          "price": 557,
          "currency": "USD",
          "releaseDate": "2021-09-23T00:26:05.868Z",
          "categoryId": 2,
          "rating": 1
        },
        // {
        //   "id": 21,
        //   "name": "Handcrafted Cotton Keyboard",
        //   "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        //   "color": "black",
        //   "price": 124,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T08:15:36.195Z",
        //   "categoryId": 2,
        //   "rating": 4
        // },
        // {
        //   "id": 22,
        //   "name": "Handcrafted Fresh Shirt",
        //   "image": "https://media.gq.com/photos/650d9aa873b15519c5c21ada/16:9/w_2560%2Cc_limit/best-clothing-brands-for-men.jpg",
        //   "color": "black",
        //   "price": 400,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-22T18:52:52.949Z",
        //   "categoryId": 5,
        //   "rating": 2
        // },
        // {
        //   "id": 23,
        //   "name": "Sleek Steel Keyboard",
        //   "image": "https://images.inc.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
        //   "color": "white",
        //   "price": 642,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-22T15:19:12.134Z",
        //   "categoryId": 1,
        //   "rating": 4
        // },
        // {
        //   "id": 24,
        //   "name": "Licensed Frozen Pizza",
        //   "image": "https://media.gq.com/photos/650d9aa873b15519c5c21ada/16:9/w_2560%2Cc_limit/best-clothing-brands-for-men.jpg",
        //   "color": "cyan",
        //   "price": 42,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T04:12:25.601Z",
        //   "categoryId": 5,
        //   "rating": 3
        // },
        // {
        //   "id": 25,
        //   "name": "Ergonomic Frozen Mouse",
        //   "image": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-22790,resizemode-75,msid-101921733/top-trending-products/toys-and-games/best-educational-toys-for-kids-in-india-to-kickstart-their-learning-journey.jpg",
        //   "color": "silver",
        //   "price": 506,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-22T13:30:14.337Z",
        //   "categoryId": 3,
        //   "rating": 5
        // },
        // {
        //   "id": 26,
        //   "name": "Practical Rubber Soap",
        //   "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        //   "color": "gold",
        //   "price": 55,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T08:48:53.479Z",
        //   "categoryId": 2,
        //   "rating": 3
        // },
        // {
        //   "id": 27,
        //   "name": "Refined Soft Chips",
        //   "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        //   "color": "lavender",
        //   "price": 500,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-22T23:35:15.339Z",
        //   "categoryId": 2,
        //   "rating": 5
        // },
        // {
        //   "id": 28,
        //   "name": "Incredible Rubber Towels",
        //   "image": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-22790,resizemode-75,msid-101921733/top-trending-products/toys-and-games/best-educational-toys-for-kids-in-india-to-kickstart-their-learning-journey.jpg",
        //   "color": "gold",
        //   "price": 67,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T07:14:10.336Z",
        //   "categoryId": 3,
        //   "rating": 3
        // },
        // {
        //   "id": 29,
        //   "name": "Tasty Fresh Bacon",
        //   "image": "https://media.gq.com/photos/650d9aa873b15519c5c21ada/16:9/w_2560%2Cc_limit/best-clothing-brands-for-men.jpg",
        //   "color": "orchid",
        //   "price": 800,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T06:02:26.785Z",
        //   "categoryId": 5,
        //   "rating": 1
        // },
        // {
        //   "id": 30,
        //   "name": "Handmade Rubber Bacon",
        //   "image": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-22790,resizemode-75,msid-101921733/top-trending-products/toys-and-games/best-educational-toys-for-kids-in-india-to-kickstart-their-learning-journey.jpg",
        //   "color": "maroon",
        //   "price": 702,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-22T21:59:37.191Z",
        //   "categoryId": 3,
        //   "rating": 5
        // },
        // {
        //   "id": 31,
        //   "name": "Licensed Granite Salad",
        //   "image": "https://images.inc.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
        //   "color": "lavender",
        //   "price": 328,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-22T21:31:33.210Z",
        //   "categoryId": 1,
        //   "rating": 3
        // },
        // {
        //   "id": 32,
        //   "name": "Licensed Frozen Chips",
        //   "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        //   "color": "maroon",
        //   "price": 403,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T10:13:54.718Z",
        //   "categoryId": 2,
        //   "rating": 3
        // },
        // {
        //   "id": 33,
        //   "name": "Rustic Concrete Towels",
        //   "image": "https://media.gq.com/photos/650d9aa873b15519c5c21ada/16:9/w_2560%2Cc_limit/best-clothing-brands-for-men.jpg",
        //   "color": "yellow",
        //   "price": 349,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-22T22:19:11.964Z",
        //   "categoryId": 5,
        //   "rating": 2
        // },
        // {
        //   "id": 34,
        //   "name": "Awesome Soft Cheese",
        //   "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        //   "color": "mint green",
        //   "price": 108,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T10:28:49.258Z",
        //   "categoryId": 2,
        //   "rating": 3
        // },
        // {
        //   "id": 35,
        //   "name": "Sleek Concrete Ball",
        //   "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        //   "color": "mint green",
        //   "price": 71,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T05:12:28.999Z",
        //   "categoryId": 2,
        //   "rating": 3
        // },
        // {
        //   "id": 36,
        //   "name": "Licensed Granite Car",
        //   "image": "https://www.healthcareitnews.com/sites/hitn/files/Global%20healthcare_2.jpg",
        //   "color": "black",
        //   "price": 363,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-22T20:11:33.107Z",
        //   "categoryId": 4,
        //   "rating": 5
        // },
        // {
        //   "id": 37,
        //   "name": "Small Soft Salad",
        //   "image": "https://images.inc.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
        //   "color": "fuchsia",
        //   "price": 438,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T03:19:33.321Z",
        //   "categoryId": 1,
        //   "rating": 4
        // },
        // {
        //   "id": 38,
        //   "name": "Awesome Soft Soap",
        //   "image": "https://www.healthcareitnews.com/sites/hitn/files/Global%20healthcare_2.jpg",
        //   "color": "ivory",
        //   "price": 708,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T05:50:06.856Z",
        //   "categoryId": 4,
        //   "rating": 2
        // },
        // {
        //   "id": 39,
        //   "name": "Small Granite Towels",
        //   "image": "https://images.inc.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
        //   "color": "teal",
        //   "price": 968,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-22T18:33:26.350Z",
        //   "categoryId": 1,
        //   "rating": 3
        // },
        // {
        //   "id": 40,
        //   "name": "Intelligent Granite Towels",
        //   "image": "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
        //   "color": "blue",
        //   "price": 57,
        //   "currency": "USD",
        //   "releaseDate": "2021-09-23T00:26:05.868Z",
        //   "categoryId": 2,
        //   "rating": 1
        // }
      ]),500)
    })
}

//http://api.devtoolstech.in/ecommerce/categories
const apiCategory = {
  fetch: () =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            {
              id: 1,
              name: "Books",
              image: "https://assets.architecturaldigest.in/photos/624c2654cf7483eb90e638d6/4:3/w_1440,h_1080,c_limit/Books-1.jpg",
            },
            {
              id: 2,
              name: "Home",
              image: "http://placeimg.com/640/480/city",
            },
            {
              id: 3,
              name: "Kids",
              image: "http://placeimg.com/640/480/city",
            },
            {
              id: 4,
              name: "Health",
              image: "http://placeimg.com/640/480/city",
            },
            {
              id: 5,
              name: "Clothing",
              image: "http://placeimg.com/640/480/city",
            },
          ]),
        500
      )
    ),
};

export default apiCategory;
