# Next.js 15 App Router: Dynamic import in layout causes unexpected behavior

This repository demonstrates a bug in Next.js 15's App Router where using dynamic imports inside a layout component leads to unexpected behavior. The application should render the 'Hello world!' message, but it does not, resulting in a blank page or an error.

## Bug Description

The issue occurs when a dynamic import is used within a layout component. This prevents the component from rendering correctly, leading to either a blank page or an error.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the blank or error page.

## Expected Behavior

The application should render the 'Hello world!' message without any errors.

## Actual Behavior

The application either renders a blank page or throws an error, preventing the 'Hello world!' message from rendering.

## Solution

The solution involves refactoring the code to avoid dynamic imports within the layout component.  This issue may be related to how Next.js 15 handles dynamic imports in the new App Router architecture. 
