![Sky logo](./docs/assets/logo.png)

## Approach
I followed following approach while doing this test.

1. I followed test driven developement for the new code I added. I did not actually any more test for the existing codes.
2. I tried to solve the problem.
3. I did not try to restucture the codebase, I just followed the existing structure. However there are lots of rooms to improvement in existing codebase.
4. I did not try to work on styling.


## Improvements
Following improvements could be made if I had enought time.

1. Restructure the files. e.g related action creator, components, redredux-promise-ucers, constants, api, helper utility functions etc can be grouped and placed inside one component folder.
2. Better styling
3. Split components into smaller components that follows single responsibilies principle
4. Wrire more tests to increase code coverage. I would probably use snapshot testings as well.
5. Would use redux-promise-middleware and bindActionCreators.
6. Would add more validations and error handlings.
7. Would use bootstrap and reactstrap for better form elements.

## Improvements if it was real project
Following improvements could be made if it was required to have production ready, in addition to above Improvements.

1. Would go automation if it was real project.
2. Would follow mobile first design
3. Would add react-router-dom when application grows.
4. Would implement container and presentation (smart and dumb) component priciple while creating components
5. Would use componentShouldUpdate for component performance,
plus many more.


# QGO Desktop Assessment

## Overview

Thanks for your interest a development role on the QGO Desktop team!

We'd like you to complete this short technical test before we bring you in for
an in person interview. It's a chance to show off your skills and show us how
you approach development.

This technical test is written in React and uses Redux for state management.
It assumes familiarity with React and Redux. If you aren't familiar with these
then let us know before starting the test!

You'll be working on a simple To Do app, extending it with a few new
features.

## Timing

About 90 mins.

If you don't get everything done in 90 mins don't worry, just send across what
you have with a note about what is left to do. We know your time is precious
and you don't want to spend all day on a technical test!

Given the time constrain we'd rather you focused on:
* Making it work, first and foremost!
* Unit tests.

Don't worry about making it look nice, or fancy CSS effects. We're happy with
unstyled buttons and elements. We'll be focusing on the code more than the
presentation.

## Getting Started

Install the required dependencies using npm:

```
npm install
```

You can then start the app with:

```
npm start
```

And run the tests (in watch mode) with:

```
npm test
```

## Tasks

We'd like you to make the following changes to the To Do app:

1. Add the ability to delete items.
2. Be able to mark items as complete. And then toggle them back to incomplete.
3. Add a filter than can be toggled to hide completed items.

## Finishing up

When you are finished with the test please send it back to us (either a link to
the repo, or a zip of the project).

It would be great if you could write up a short summary of how you approached
the task, and if there are any improvements you would have made if given more
time.

## Notes

Ideally this should feel as much like normal development as possible.

* Feel free to search for any information you need.
* You can add any libraries you need to get the job done.
* Please contact us if you have any questions about the task, we're happy to
  give more details!
