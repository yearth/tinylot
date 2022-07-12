#!/usr/bin/env node

if (process.env.NODE_ENV === 'development') {
  require('../src/main').default();
} else {
  require('../dist/main').default();
}
