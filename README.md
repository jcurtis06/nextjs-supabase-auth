# Supabase Authentication Example  🔐
This is a minimal example project showing how to set up auth with Supabase. It features protected routes through NextJS `middleware`. This specific example shows email & password authentication.

### Getting started 
- Create a `.env.local` file in the root directory and add your Supabase application credentials:
```
NEXT_PUBLIC_SUPABASE_URL=URL_HERE
NEXT_PUBLIC_SUPABASE_ANON_KEY=API_KEY_HERE
```
- Run `npm i`, then `npm run dev`
- Go to `localhost:3000` to view the project

### Protected routes
Any page within the `protected` directory will require a user to be signed in, otherwise it will redirect to the home page. Click the `Go to dashboard` link to see this in action.
