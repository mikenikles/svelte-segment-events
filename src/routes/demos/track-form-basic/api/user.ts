import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler<{}, FormData> = async (request) => {

  const email = request.body.get("email");
  console.log(`User with email ${email} signed up.`)

	return {
    status: 301,
    headers: {
      location: "/demos/track-form-basic?signedup"
    }
  };
};