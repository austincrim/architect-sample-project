@app
my-app

@http
get /
get /todos
post /todos

@tables
todos
  title *String

@aws
# profile default
region us-west-2
architecture arm64
