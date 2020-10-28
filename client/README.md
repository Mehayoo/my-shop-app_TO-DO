
# My Shop App

Simple shop for ordering products.


## Instructions:
- ./package.json -> npm run dev
- ./config/config.env: 
  - NODE_ENV=development
  - PORT=5000
  - MONGO_URI = mongodb+srv://sorin:sorin@mehayoo-lykqh.mongodb.net/myShopApp?retryWrites=true&w=majority
- ./client/.env:
  - REACT_APP_BASE_URL=http://localhost:5000/api/v1
- MongoDB Compass:
  - mongodb://sorin:sorin@contactkeeper-shard-00-00-mpj0k.mongodb.net:27017,contactkeeper-shard-00-01-mpj0k.mongodb.net:27017,contactkeeper-shard-00-02-mpj0k.mongodb.net:27017/test?authSource=admin&replicaSet=ContactKeeper-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true (ContactKeeper)
  - mongodb+srv://sorin:sorin@mehayoo-lykqh.mongodb.net/admin?authSource=admin&replicaSet=Mehayoo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true (MyShopApp)
  - user:password - sorin:sorin 


## Scope of project:

Create a webapp that demonstrates the skills of a developer working on a React Project.


## Sections:

- Header
  - Logo
  - Navigation Menu with link towards Checkout

- Footer
  - 3 Social Media Links
  - Copyright text

- Homepage->Product Page

- Products
  - Image
  - Title
  - Description
  - Price
  - Quantity Selector
  - Add button
  - Filtering - MVP#2

- Checkout page
  - Title
  - Total Price
  - Quantity selector
  - "Remove" button
  - "Continue ordering" button
  - "Place order" button
  
- Confirmation Page
  - Heading
  - Body text


## Components:

### Atoms
- Image
- Button
- Product
- Text
- Link
- Quantity Selector
  
### Blocks
- Navigation Menu
- Header
- Footer
- Product List
- Links
- Product Table
- Filter  - MVP#2


## Epics: (to be written 24.04.2020)

- Header
- Footer
- Homepage -> Products
- Products
- Checkout
- Confirmation


## Technologies/Plugins:
- ContextAPI
- React Router
- Reactbootstrap / MaterializeCSS - TBD (24.04.2020)
  - Grid to be used
- FontAwesome (materiliaze
- Components (Atoms/Molecules/Organisms)
- Sass
- BEM
- Webpack + babel config: https://www.valentinog.com/blog/babel/ 
- PropTypes
- Storybook
- Unit Tests (jest + react dom libray/enzyme TBD 24.04.2020)
- Deploy pe Cloud Application Platform (Heroku/IBM Cloud)
- BD structure (Node, Express, MongoDB, Mongoose): TBD
```
{
	products {
	
	},
	orders: {
	
	}
}
```