# Contentful-test

A Repository to test the payloads from contentful.

[Shortcut to the Project Steps](#project-steps)

The purpose of this mini project is to demonstrate and test the knowledge within the team on Contentful integration using the three different SDK:

- [Javascript SDK](https://github.com/contentful/contentful.js)
- [Contentful App SDK](https://www.contentful.com/developers/docs/extensibility/app-framework/sdk/)
- React SDK

There are also a number of different [Contentful content APIs](https://www.contentful.com/developers/docs/concepts/apis/#:~:text=If%20you're%20retrieving%20content,use%20the%20Content%20Management%20API.):

#### Delivery API

- If you're retrieving content to display to users in an app or website, use the Content Delivery API.
- The delivery API is used in the `web-app` as a readonly delivery of the content stored in contentful.
- Content is delivered as JSON data, and images, videos and other media as files.

#### Management API

- If you want to programmatically create or update content items, use the Content Management API.
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

In the `getServerSideProps` function, I have retrieved my entry by id but also queried for all locals using the wildecard '\*'. This gives me the object with the fields localized:

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

### 6. Creating an App
