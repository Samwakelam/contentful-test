# Contentful-test

A Repository to test the payloads from contentful.

[Shortcut to the Project Steps](#project-steps)

The purpose of this mini project is to demonstrate and test the knowledge within the team on Contentful integration using the three different SDK:

- [Javascript SDK](https://github.com/contentful/contentful.js)
- [Contentful App SDK](https://www.contentful.com/developers/docs/extensibility/app-framework/sdk/)
- [React SDK](https://www.npmjs.com/package/@contentful/react-apps-toolkit)

There are also a number of different [Contentful content APIs](https://www.contentful.com/developers/docs/concepts/apis/#:~:text=If%20you're%20retrieving%20content,use%20the%20Content%20Management%20API.):

#### Delivery API

- If you're retrieving content to display to users in an app or website, use the Content Delivery API.
- The delivery API is used in the `web-app` as a readonly delivery of the content stored in contentful.
- Content is delivered as JSON data, and images, videos and other media as files.

#### Management API

- If you want to programmatically create or update content items, use the [Contentful Management API](https://github.com/contentful/contentful-management.js/tree/legacy).
- A read-write api to create custom editing experiences (this is what Content Platform are using).
- It will retrieve all items; localised and unpublished.

#### Preview API

- If you want to retrieve unpublished content to show in-context previews to content creators and editors, use the Content Preview API. This API behaves like the Content Delivery API, but includes content that has not yet been published.

#### Images API

If you want to retrieve and apply transformations to images stored in Contentful, use the Images API.

#### GraphQL Content API

If you want to generate schemas and query content in the GraphQL format, use the GraphQL Content API.

## Project Steps

### 1. Init

I have set up a turbo repo to manage workspaces including 2 `apps/` directories to house contentful apps.

- `contentful-app` will house the trial to build a Contentful app using the sdk.
- `web-app` will replicate a hosted website where the content comes from contentful. This will run on localhost:3001

I have tested that my env variables can be received by the server side props in the next js application.

### 2. Setting up contentful client

I have set up the contentful client in the `web-app` for the moment under lib/vendor/contentful.ts

I'm not sure yet how THe community-hub-mono or the content-platform get each field back in a localised object, but I have set up the query parameter to look for the designated locales.

I have set up Locales on the community develop space for en-US and en-GB and enabled them on `samTestModal` content type.

I have printed the entry types in the console for now.

### 3. Creating components

- I have added my Previously set up packages in the workspace packages, these include icons, themes, library and types.

- Created a view-model for the web-app

- Created a `SamTestModel` component to be mapped to the contentful entry `samTestModel`

### 4. Received data through contentful

In the `getServerSideProps` function, I have retrieved my entry by id but also queried for all locales using the wildecard '\*'. This gives me the object with the fields localized:

```
{
    name: {en-US: 'Name'},
    description: {
        en-US: 'Description',
        en-GB: 'Description',
     }
}
```

Clearly Default locale is en-US.

I have also utilised the getLocales function on contentful API to get the set up list of locals.
I want to create a dropdown that can show the different locales data.

### 5. Setting up the Contenful app sdk.

The contentful `app-SDK` works in tandem with the `react-apps-toolkit` and the `contentful-management` api. React apps toolkit automatically makes the Contentful App SDK available to any child components using React Context. `useSDK` returns an instance of the Contentful App SDK.

Contenful appSDK provides locations for the contentful app space. I have set up a basic `Home` and `Page` where these pages are hosted under the Home tab and apps space respectively.

**Issues:**

- Typescript errors on the KnownSDK type pre-determined by the create-contentful-app. I have had to //@ts-ignore.
- Webb App Component is throwing a wobbly?

### 6. Creating an App

Created a basic view that will enable editing, creating and updating of models in contentful. Basic view consists of test data and an input modal for creation. Next steps are to connect up contentful using the sdk and contentful manager in the library package.

content-manager will help with creating a service where we can define adding the data back into the contentful system.

I have created a service class to manipulate the data coming out of contentful, transforming it into a structure I wish to use in my app.

Setting up the client in a separate package inline with Dependency Injection, I have created the client.

I can pull the sdk from the `@contentful/app-sdk`. This gives me complete access to our space.

> Note:
>
> Since the app is installed in a specific environment of a space, it can only access entities within that environment.

I 'can' do .space.getEntries({...}) from here, but a warning is presented in the console:

> Warning:
>
> You called getEntries on the Space API. Since version 4.0.0 the Space API and its methods are deprecated, and they will be removed from version 5.0.0 on. We recommend that you use the CMA client instead.

For this reason I am following the 'Using the contentful-management library' which [we know](#management-api) can update and create contentful items.

Once the cma Client is set up you need to get the space (top level container for all other resources) and then the environment (contains methods to access any operations at a space level) which provides you access to the getEntries methods and other CRUD operations.

##### Useful Links

- [Contentful Environment API](https://contentful.github.io/contentful-management.js/contentful-management/5.0.0-beta2/ContentfulEnvironmentAPI.html)
- [ContentfulSpaceAPI](https://contentful.github.io/contentful-management.js/contentful-management/5.0.0-beta2/ContentfulSpaceAPI.html)
- [API documentation](https://github.com/contentful/contentful-management.js/tree/legacy#api)

7. Create an Entry

This was reasonably simple, you must pass the `fields` prop to `createEntry()` method on the environment object, where fields is an object of the components props. The rest of the entry is created automatically.

<!-- **Gotcha**, the locales are not set here. You can pass in an object with the locale keys and it will save it, but showing the available and set options in contentful is currently managed manually. -->

Creating an Entry does not release the Entries to the web app as these are unpublished in the contentful system. To view a preview of the unpublished Entries, we would need to use the [Preview API](#preview-api).

8. Delete an Entry

You get an entry and apply the `delete()` method. This is throwing an error in my service. I have suspicions that the id is not accurate.

9. Get new entries to show on Web-App

The Web app only pulls content from the [Delivery Api](#delivery-api) meaning that only contentful's published content will show in the web app.

An entry has [publish](https://contentful.github.io/contentful-management.js/contentful-management/5.0.0-beta2/Entry.html#.publish) and [unpublish](https://contentful.github.io/contentful-management.js/contentful-management/5.0.0-beta2/Entry.html#.unpublish) methods.

**Issues** Typescript!! The payload from contentful-management and contentful are both different for Entry.

10. Typescript the Entry properly

Created an additional service layer that will accept a `contentful-management` entry and convert it to a Widget. This means there is no meeting of Entry types in the library and the parser is inside the service.

11. Editing / updating Widget

The Entry Model has a method `update` where you can amend the entry fields followed by using the method.

**Gotcha** The update is not published to the delivery API. This means that the changes will not display on the web-app.

**Solution** The entry payload has published at and updatedAt properties which I have passed to my Widget object. Looking to see if the updated date exceeds the published date adds a new publishChanges Button and UnPublished Changes Tag.

It is new addition as the widget is still published with old content on the web-app and needs this indicator for the user.
