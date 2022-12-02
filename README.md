# apdex-board-app

This is a simple Nextjs web application that fetches a list of Apps from an AWS endpoint and shows a list of Hosts where those apps are deployed at.

## 💾 Installation

```bash
git clone git@github.com:gastonnicolas1991/apdex-board-app.git
cd apdex-board-app
yarn install
yarn dev
```
The application will be running on: http://localhost:3000

⚠ Check if  NEXT_PUBLIC_API_ENABLE='ON' for API data. If any problem, change to 'OFF' for working with the local copy.

## 🗄 ENV

In .env.local we have:

```
NEXT_PUBLIC_API_ENABLE='ON'
NEXT_PUBLIC_API_ENDPOINT='https://***-public-app-assets.s3.eu-west-1.amazonaws.com/host-app-data.json'
```
- (I'm Hiding real endpoint for privacy purposes 😋)
NEXT_PUBLIC_API_ENABLE allows us to work with MOCK or REAL API DATA. 
- NEXT_PUBLIC_API_ENABLE='ON' -> Api
- NEXT_PUBLIC_API_ENABLE='OFF' -> Mock local data

##  💪 Structure

The folder structure:

```
├── .storybook
├── pages
    ├── index.tsx -> our main page
    ├── styles.ts
├── src
    ├── components
        ├── SomeComponent
            ├── index.tsx
            ├── index.stories.tsx
            ├── style.ts
            ├── index.test.tsx
    ├── domain 
    ├── redux
        ├── reducer
        ├── slices
        store.ts
    ├── styles
        color.ts
        media.ts (if having responsive media queries)
    ├── utils
        functions.ts
├── styles
├── .env.local

```
- **pages**: I usually have a "SomePage" folder with an index.tsx and its styles.ts (if needed).
- **src**: client side.
- **components**: Each new component it's isolated in here and in case of removing it, we remove the WHOLE component (test, story and styling)
- **redux**: Selectors, reducer, slices, store.


## 🎨 Responsive

I usually use media queries on styled-components stylesheets to manage breakpoints. As it was a requirement to delegate the layout to the user (with a checkbox where he can select grid or list layout) I decided not including any media queries.
Anyway, in any other application I would include a global "media.ts" where it calculates sizes, like this:

```
export const sizes = {
  tablet: 480,
  desktop: 1280,
};

export const breakpoint = {
  tablet: `(min-width: ${sizes.tablet}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};

export const media = {
  tablet: `@media ${breakpoint.tablet}`,
  desktop: `@media ${breakpoint.desktop}`,
};
```

## 🔧 Tooling

- **Storybook** -> For developing stateless components, check with UI/UX team if the behavior is the expected and also to avoid integration problems at early phases of the development.
- **Redux toolkit** -> For managing state. Once we fetch the data, we need to transform it in a state that we could use and modify. I decided to use Redux for the "remove/add" actions, due to the fact that are related to the user intervention and we need to persist them.
- **NextJs** -> Even if I am not using data fetching from the getServerSideProps, it could have been a very good approach to preload data on server side. (It requires a hard integration with redux, like the **next-redux-wrapper** third party).
- **Styled-components** -> For having a more javascript approach.
- **Typescript**
- **Axios**
- **React testing library**
- **Eslint**


## 📚 Storybook

We can see the whole design system. Also, we can interact with some of the behavior like modals.

```bash
cd apdex-board-app
yarn storybook
```
We should see it running on: http://localhost:6006/

## ✔ Unit Testing

Each component has (or it should have) its own unit testing where I test rendering and basic behavior.
Each function (like utils) is also tested its input and output.

## 🔌 Services 

In this case we only have this service:
```
GET: https://witbooking-public-app-assets.s3.eu-west-1.amazonaws.com/host-app-data.json.
```

## ⚙ Methodology

How did I worked on this challenge?

1) I created a Trello where I put the main tasks to have an idea.
2) I setup the basic tooling.
3) I started first with the storybook and the whole styling requirements.
4) I continued with the componentes and the page integration.
5) I installed redux.
6) I developed the algorithm for mapping from AWS endpoint to client side.
7) I deleted unused files, made typing corrections and worked on this README.


## Notes 

- ⚠️ I had to enable CORS for the Browser to be able to fetch from theAWS endpoint. I have been digging about it but I could not find easily the correct way to configure it.
- Selectors were not included in Redux folder cause it was necessary for the app, but I normally work with them.
- Tooltip component was an extra idea for showing some extra data when hovering over the list of apps in each host, but it was not implemented for timing.
- I did not integrate any SSR feature, but I consider that It could be a better approach to do the data fetching on server.
- Even if it was required to work with the endpoint on the client side, I would have consider to make the whole transformation on backend side and delivering a more specific response to the client :).
- I tried to commit each "piece of work", but in a real enviroment i would be even more specific and I would also work with branches instead of pushing directly to master of course.
