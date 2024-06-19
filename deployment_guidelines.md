## How it works

This simple app extension allows users to get a discount based on their `custom.customer_type` meta-field. Simply cutomers of `vip` and `loyal` `customer_type` gets a `30%` discount in the checkout page.


## Prerequisite 

Merchants have to create a custom meta-field from the admin dashboard. Simply go to **settings** => **custom data** => **customers** to add a new meta field for the customers account. the meta field namespace is `custom` and the key has to be named `customer_type`. 

> Bear in mind only a value of `vip` or `loyal` customers will see the discount(dynamic) code in the UI.

## Guide

To deploy the app is pretty simple. Just clone this repository and run the following commands to deploy this in a developjment store.

> caution: you need shopify command line installed in the machine.

```sh
yarn config:use
``` 

or 

```sh
shopify config use

```

in the root of the project.

Run 

```sh
yarb deploy
```
or
```sh
shopify app deploy
```
in the root and you are good to go.

## Additional Notes

The web-pixel that is implemented in this app communicates to a remote server to store the discount click events in a database. The source code can be found in this repository [Here](https://github.com/RiadHossain43/prisma-node-express).


