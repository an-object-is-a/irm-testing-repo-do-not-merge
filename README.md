# Notes for the Developer

## **Do not use NPM.** There seems to be a problem with **npm** and Gatsby. Please use **Yarn**.

---

To get the project running locally:

1. Clone or download into local repo.

2. ```>> yarn install```

3. ```>> gatsby develop```

*note: The process of pulling data might cause the develop and build processes to fail. Simply delete the '**.cache**' and '**public**' folders...

```gatsby clean```

...and try again. (This might be due to Wordpress API timeouts/ineffective data fetching)

---

### **All filenames are correct.**

Some components, ex. '**/components/AllMarketplacelinks.js**' do not adhere to proper React camel-case component naming conventions. This is because Netlify is case-sensitive and doesn't allow for certain files being rendered into pages to have camel-case naming. *Please don't change these names.*

### **Files marked for deletion.**

I've identified files in the old build of the site that weren't needed. I've placed them in the folder '**marked_for_deletion**'. Once you feel comfortable, it'll be ok to delete this folder completely.

### **Creating new Marketplace Product Listing Pages.**

In the old build, marketplace product listing pages were created manually. This meant 15+ files with very similar code. I reduced this process to 2 files:

* **/templates/marketplace-listing.js**
* **gatsby-node.js**

To add new product listing pages in the future, simply add the required data into the '**marketplace_product_listing**' array in '**gatsby-node.js**'. This will make sure Gatsby pulls in all relevant marketplace data from the Wordpress posts.