from django.test import TestCase

# Create your tests here.

def decorator(func):
    print '111'
    def wrap():
        func()
    print '333'
    return wrap

@decorator
def myfunc():
    print '222'

def makebold(fn):
    def wrapped():
        return "<b>" + fn() + "</b>"
    return wrapped

def makeitalic(fn):
    def wrapped():
        return "<i>" + fn() + "</i>"
    return wrapped

@makebold
@makeitalic
def hello():
    return "hello world"

if __name__ == '__main__':
    myfunc()
    myfunc()
    print hello()
    print hello()
    
    s1 = 'aaa'
    s2 = 'abcaaaccc'
    l1 = len(s1)
    l2 = len(s2)
    for i in range(0,l2):
        if i + l1 <= l2 and s2[i:i+l1] == s1:
            print i
            break
    else:
        print 'error'
        
    l = [1,1,2,2,2,3,3,4,4,4,4,4,5,6]
    d = {item:True for item in l}
    l_new = [item for item in d]
    print d,l_new
    