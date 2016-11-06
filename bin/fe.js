#!/usr/bin/env node
'use strict'
// for dev
// NODE_ENV=dev fe
// const isDev = (process.env.NODE_ENV + '').toLowerCase() === 'dev'

// DEBUG=fe fe
// DEBUG=on fe
const debug = require('debug')('fe')
debug.enabled && require('time-require')
require('../lib').default()
