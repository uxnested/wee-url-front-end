# Next.js Enterprise Project Structure

The concept is around about three pillars of code that when left poorly managed tend towards programmer purgatory. These concepts are:
1. **Code volume**: the larger the codebase, the more unmanageable it can become.
2. **State management**: complex state management leads towards this aforementioned purgatory.
3. **Flow control**: the less readable your conditional logic is, the more difficult it becomes to maintain.

It is undeniable that code bases will continue to grow, so we can set ourselves up for success with code volume by focusing on the project layout.

This post will display an overview of an opinionated project structure and how to set it up for Next.js. This code structure is one that has made it more manageable for me to separate application code from configuration as well as infrastructure code when maintaining a large, mono-repo.

The first change that we are aiming to make to opt to use a **src** folder to host our Next.js code.

Using **src** is documented under the **[Next.js src directory documentation](https://nextjs.org/docs/advanced-features/src-directory)**.

The aim of this is to separate our application code from our top-level configuration.

If you have written a large Next.js project before, you'll notice that the top-level folders start to become unruly as you add more and more top-level folders to separate our application concerns.

Placing them within **src** enables us to keep our top-level folders clean and organized as well as have a mutual understanding across developers about where code for the application belongs.

For this project, we can move **pages** and **styles** into **src**.

If we now run **npm run dev** again, then you'll see that without changing our configuration more than moving the **pages** folder, then the Next.js config will know where to find our project entry point (as per the documentation)

> Note: as the documentation says, configuration files should not be moved to src nor the public folder.

# Breaking up our src folder 

Now that we have our **src** folder, it is worth breaking things down even further into logical pieces.

For my larger projects, this normally means that my **src** folder is split into four folders:

1. **pages**: This is still used for my pages layout (and is required for Next.js, so it ain't going no where).
2. **common**: This folder consists of common code that I use across my application. I will speak more to this in a latter section but it generally contains most of the code.
3. **modules**: "Modules" for my is synonymous to features or logical groupings of code that make up the larger pages.
4. **content**: This itself can be optional or moved to elsewhere, but it is generally where I put my copy, internationalization and images etc. that I do not keep public.
The common folder itself generally becomes the most complex. Within that, I also define a number of different folders based on the project I am running:

Within components again, I generally break down my components into three areas:

1. application: components that pertain to only being used within the application. This includes things like login components, page shells, etc.
2. marketing: any component that is generally used for marketing purposes like pricing tables, etc.
3. ecommerce: all components related to e-commerce work. Think carts, checkout, etc.

It is entirely up to you how you structure your common folder, but the same principle applies of colocating when directly related or following the separation of concerns.

Once this has been set up (and if you are using TypeScript), the last change that I make to the initial setup is to use TS configuration paths.

# Setting up TypeScript configuration paths

`` {
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/common/components/*"],
      "@styles/*": ["src/common/styles/*"],
      "@modules/*": ["src/modules/*"],
      "@content/*": ["src/content/*"]
    }
    // ... omitted for brevity
  }
  // ... omitted for brevity
} ``

## As for the _app.tsx file, we need to update the styles import:
``import "@styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;``