#!/bin/bash
lb clean
lb config
lb build 2>&1 | tee build.log

