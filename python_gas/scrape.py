
def getData(url):
  import yql
  from datetime import datetime

  y = yql.Public()
  price_query = 'select * from html where url="%s" and xpath="//center/table/tr/td/div[3]/center/table/tr[5]/td[2]/font"' % url
  #price_query = 'select * from html where url="%s" and xpath="//center/table/tr/td/div[2]/center/table/tr/td/table/tr[12]/td[2]/font"' % url
  #price_query = 'select * from html where url="%s" and xpath="//center/table/tr/td/div[2]/center/table/tr/td/table/tr[11]/td[2]/font"' % url
  date_query = 'select * from html where url="%s" and xpath="/html/body/div/center/table/tr/td/div/center/table/tr/td[2]/table/tr/td/p/span/strong/font[2]"' % url

  data = {}

  #roflcopter = True
  #while roflcopter:
  #  result = y.execute(price_query)
  #  for row in result.rows:
  #    price = row['content']
  #    data['price'] = price.strip()
  #    roflcopter = False

  #roflcopter = True
  #while roflcopter:
  #  result = y.execute(date_query)
  #  for row in result.rows:
  #    date = row['content']
  #    date = date.strip()
  #    data['date'] = date[11:]
  #    roflcopter = False

  result = y.execute(price_query)
  for row in result.rows:
    print row
    #price = row['content']
    #data['price'] = price.strip()

  #result = y.execute(date_query)
  #for row in result.rows:
  #  date = row['content']
  #  date = date.strip()
  #  data['date'] = date[11:]

  #data['unix'] = datetime.strptime(data['date'], "%B %d, %Y").strftime('%s')

  return data

def buildUrl(date):
  url_prefix = 'http://www.irac.pe.ca/infocentre/documents/petroleumpriceseff';
  url_postfix = '.asp';
  url_date = date.strftime('%y%m%d')
  return "%s%s%s" % (url_prefix, url_date, url_postfix)

def httpExists(url):
  import httplib
  import urlparse
  host, path = urlparse.urlsplit(url)[1:3]
  found = False
  try:
    connection = httplib.HTTPConnection(host)  ## Make HTTPConnection Object
    connection.request("HEAD", path)
    responseOb = connection.getresponse()      ## Grab HTTPResponse Object

    if responseOb.status == 200:
      found = True
  except Exception, e:
    pass 

  return found

def buildUrls():
  import httplib

  urls = []
  from datetime import date, timedelta
  current_date = date(2009, 11, 01)
  outside_date = date(2006, 01, 01)
  while True:
    url = buildUrl(current_date)
    if httpExists(url):
      urls.append(buildUrl(current_date))
    current_date = current_date - timedelta(days=1)
    if current_date < outside_date:
      break;
  return urls

#urls = buildUrls()
#print 'start'
#for url in urls:
#  data = getData(url);
#  if(data):
#    print data
#while True:
#  print getData('http://www.irac.pe.ca/infocentre/documents/petroleumpriceseff130201.asp');
print getData('http://www.irac.pe.ca/infocentre/documents/petroleumpriceseff071109.asp');
