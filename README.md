# Firebase base layer

When architecting a modular project architecture you need to start from the ground up. Each step
being as reuseable as possible. Here we start with the base layer.

This will provide access to things like databases, authentication, storage buckets and so on using
firebase.

Long term I imagine building a layer for each service (e.g. firebase, supabase, vercel) with each of
them being compatible with the following layers such as users or notifications.

This way we can architect apps in a modular fashion allowing us to reuse huge chunks of code. Though
it is a given this means we loose some performance. This said, we live in a world of huge computing
power so in most cases the trade between write speed and compute speed will be worth it.

I imagine such systems to be mainly used for small codebases.
