let output = (type, payload, optional) => {
  //https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions
  payload = payload || null;
  optional = optional || null;

  let prefix = '[Prefix]';

  switch (type) {
    case 'assert':
      //assert(assertion, obj1, obj2, /* … ,*/ objN) || assert(assertion, msg)
      console.assert(optional, `${prefix} ${payload}`);
      break;
    case 'count':
      //count() || count(label) && countReset() || countReset(label)
      if (payload === null) {
        console.count();
      } else {
        console.count(payload);
      }
      break;
    case 'info':
      //info(obj1, /* …, */ objN)
      if (payload === null) {
        console.info(`${optional}`);
      } else if (payload !== null && optional === null) {
        console.info(`${prefix} ${payload}`);
      } else {
        console.info(`${prefix} ${payload}`, optional);
      }
      break;
    case 'dir':
      //dir(object)
      if (optional !== null) {
        console.log(`${prefix} ${payload}`);
        console.dir(optional);
      } else {
        console.dir(payload);
      }
      break;
    case 'dirxml':
      //dirxml(object)
      if (optional !== null) {
        console.log(`${prefix} ${payload}`);
        console.dirxml(optional);
      } else {
        console.dirxml(payload);
      }
      break;
    case 'group':
      //group() / group(label) || groupCollapsed() && groupEnd()
      if (optional !== null) {
        console.log(`${prefix} ${payload}`);
        console.groupCollapsed(optional);
      } else {
        console.group(payload);
      }
      break;
    case 'log':
      //log(obj1, /* …, */ objN)
      if (payload === null) {
        console.log(`${optional}`);
      } else if (payload !== null && optional === null) {
        console.log(`${prefix} ${payload}`);
      } else {
        console.log(`${prefix} ${payload}`, optional);
      }
      break;
    case 'debug':
      //debug(msg, subst1, /* …, */ substN)
      if (payload === null) {
        console.debug(`${optional}`);
      } else if (payload !== null && optional === null) {
        console.debug(`${prefix} ${payload}`);
      } else {
        console.debug(`${prefix} ${payload}`, optional);
      }
      break;
    case 'warning':
      if (payload === null) {
        console.warn(`${optional}`);
      } else if (payload !== null && optional === null) {
        console.warn(`${prefix} ${payload}`);
      } else {
        console.warn(`${prefix} ${payload}`, optional);
      }
      break;
    case 'error':
      //error(obj1, /* …, */ objN)
      if (payload === null) {
        console.err(`${optional}`);
      } else if (payload !== null && optional === null) {
        console.err(`${prefix} ${payload}`);
      } else {
        console.err(`${prefix} ${payload}`, optional);
      }
      break;
    case 'default':
      console.warn('no type defined', payload, optional);
      break;
  }
};

output('info', 'js boilerplate');
