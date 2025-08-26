## Running in Docker

### Create the images

- docker compose build db
- docker compose build back
- docker compose build front

### Run

sh start.sh

## Next steps

From here, you can start working on your project!

Then you can make your various controllers, models, migrations, etc. as you need! The one funky thing is that instead of rendering an HTML view you'll be rendering JSON. [You can return anything from a Rails controller as JSON like this.](https://guides.rubyonrails.org/v5.2/layouts_and_rendering.html#rendering-json) See the example in my "tests_controller".

On the React side, the important bit is that you make you make your AJAXy HTTP requests using something like `axios` or `superagent`. I've set this up to use `axios` already. Check the React code to see an example request being made on-click to the Rails server! You can make your HTTP requests to `/api/anything/you/want`, as long as the route exists on your Rails app.

**NOTE:** I recommend that you namespace all your routes under `api` on the Rails side! Look at how I've done that in the `routes.rb` file, and also how the `tests_controller` is written as:

```rb
class Api::TestsController < ApplicationController
```

and it lives in the `api` folder! Put all your controllers in there!
