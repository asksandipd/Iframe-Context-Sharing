Iframe Context Sharing
=

A quick demo about how context can be shared between mulptiple iframes using different approaches:
* window.top + a global context manager GCM (cons: each iframe has to invoke and register its context with the GCM)
* window.top + pub/sub pattern (a more acceptable solution)
