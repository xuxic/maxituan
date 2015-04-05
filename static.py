import web

urls = ("/signup", "signup")
app = web.application(urls, globals())

class signup:
    def GET(self):
        return [{'name':'aaa','phone':"15811110000"},{'name':"bbb",'phone':"15822229999"}]
    
    def POST(self):
        i = web.input()
        print i.name
        print i.phone
        output = open('output','a')
        output.write(i.name+','+i.phone+'\n')
        output.close()

if __name__ == "__main__":
    app.run()
