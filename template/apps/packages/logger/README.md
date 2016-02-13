# Meteor Logger

## Get started
### Add the package
```
meteor add leesangwon:logger
```

### Setup in the server
Default logger transport is 'Console'.  

You can add a new transport with this:  

```
Logger.addTransport(type, options);
```

The `type` is as follows:

* console
* file
* dailyFile
* http


