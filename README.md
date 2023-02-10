# contentful-test

A Repository to test the payloads from contentful

# Contentful Test

The purpose of this mini project is to demonstrate and test the knowledge within the team on Contentful integration using the three different SDK.

- [Javascript SDK](https://github.com/contentful/contentful.js)
- Contentful App SDK
- React SDK

## Steps

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
