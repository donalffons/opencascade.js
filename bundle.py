import os, sys

bundle = open(sys.argv[1], 'a')
bundle.write(open('glue.js', 'r').read())
bundle.write('''
this['opencascade'] = Module; /* With or without a closure, the proper usage is opencascade.* */
''')
bundle.close()

