# Event Loop Related

Event loop is a set of rules for how the runtime (browser / Node) decides what code to run when it has finished running the current code. E.g. “okay we’ve exited all functions, so now, let’s run expired timeouts”. that includes code after `await` if the thing has resolved -- [Dan Abramov](https://github.com/gaearon)

## References

- [Tasks, microtasks, queues and schedules (2015.08)](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)