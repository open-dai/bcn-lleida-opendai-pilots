'''
Created on 06/06/2013

@author: mplanaguma
'''

from opendai_client import geocoding_logic
from itertools import product
import logging
import requests

class ApiClient(object):
    
    OPENDAI_URL = "http://194.116.110.155:8080/"
    BCN_API = "apibarcelona/rest/json/"
    LLEIDA_API = "apilleida/rest/json/"
    BB_LLEIDA = [(0.5599594116210938,41.580525125613846),(0.5599594116210938,41.65649719441145),(0.7123947143554688,41.65649719441145),(0.7123947143554688,41.580525125613846)]
    LLEIDA = "Lleida"    

    def __init__(self):
        self.geocoder = geocoding_logic.GeoCodingLogic()
        
    def get_pollution_all(self):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "pollution/zone/all"); 
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        return result
    
    
    def get_pollution_by_ID(self, id):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "pollution/zone/" + str(id)); 
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        return result
    
    
    def get_pollen_all(self):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "polen/all/");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        return result
    
    
    def get_noise(self, street, number):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "noise/" + street + "/" + number);
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        return result
    
    def get_lleida_alerts(self):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "accessibility/roadincidents/all");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, p in enumerate(result):  
            street = p['street']
            place, (lat, lng) = self.geocoder.get_lat_lon_by_street_async(street, self.LLEIDA, self.BB_LLEIDA)
                    
            result[index]['geo'] = {'lat' : lat, 'lng' : lng}
        
        return result

    def get_lleida_alerts_days(self, days):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "accessibility/roadincidents/all/" + days);
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, p in enumerate(result):  
            
            street = p['street']
            place, (lat, lng) = self.geocoder.get_lat_lon_by_street_async(street, self.LLEIDA, self.BB_LLEIDA)
                    
            result[index]['geo'] = {'lat' : lat, 'lng' : lng}
        
        return result
    
    def get_lleida_bustops_all(self):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "datapublication/busstops/all/");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, d in enumerate(result):  
            utm_x = d.get('coordX')
            if not "." in utm_x: utm_x = utm_x + ".0"
            utm_y = d.get('coordY')
            if not "." in utm_y: utm_y = utm_y + ".0"
            
            (lat, lng) = self.geocoder.convert_utm_to_lat_lng(float(utm_x), float(utm_y), 31, 'T')
            result[index]['geo'] = {'lat':lat, 'lng':lng}
        
        return result
    
    def get_lleida_bustops_id(self, id):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "datapublication/busstops/" + id);
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, d in enumerate(result):  
            utm_x = d.get('coordX')
            if not "." in utm_x: utm_x = utm_x + ".0"
            utm_y = d.get('coordY')
            if not "." in utm_y: utm_y = utm_y + ".0"
            
            (lat, lng) = self.geocoder.convert_utm_to_lat_lng(float(utm_x), float(utm_y), 31, 'T')
            result[index]['geo'] = {'lat':lat, 'lng':lng}
        
        return result

    def get_lleida_bustops_near(self, p_lat, p_lng, p_r):
        
        all_stops = self.get_lleida_bustops_all()
        points = self.geocoder.get_near(all_stops, p_lat, p_lng, p_r)
        
        results = []
        
        # iteration !!!
        for (point, stop) in product(points, all_stops):
            
            if (stop['geo'] == {"lat":point[1], "lng":point[0]}):
                results.append(stop)
        
        #results.append(stop for point in points for stop in all_stops if stop['geo'] == {"lat":point[1], "lng":point[0]})
            
        return results
    
    def get_lleida_buslines_all(self):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "datapublication/buslines/all/");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        return result
    
    def get_lleida_buslines_all_geojson(self):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "datapublication/buslines/all/");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        return self.geocoder.get_bus_line_geojson(result)
        
        
    def get_lleida_buslines_id(self, id):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "datapublication/buslines/" + id);
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        return result
    
    
    def get_lleida_pois_categories_all(self):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "datapublication/pois/category/all");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        return result
    
    def get_lleida_pois_by_category_ids(self, id):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "datapublication/pois/category/" + id);
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, r in enumerate(result):  
            coordinates = r['coordinates'];
            if coordinates != None:
                splited = coordinates.split(",")
                lat ,lng = None, None
                if len(splited) > 3:
                    lng = float(splited[0] + "." + splited[1])
                    lat = float(splited[2] + "." + splited[3])
                elif len(splited) > 2:
                    lng = float(splited[0])
                    lat = float(splited[1])
                
                result[index]['geo'] = {'lat':lat, 'lng':lng}   
            else:
                street = r['address']
                place, (lat, lng) = self.geocoder.get_lat_lon_by_street_async(street, self.LLEIDA, self.BB_LLEIDA)
                result[index]['geo'] = {'lat' : lat, 'lng' : lng}
                
        return result
        
    def get_lleida_accessibility_all(self):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "accessibility/accservs/all");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, p in enumerate(result):  
            
            street = p['street']
            place, (lat, lng) = self.geocoder.get_lat_lon_by_street_async(street, self.LLEIDA, self.BB_LLEIDA)
                    
            result[index]['geo'] = {'lat' : lat, 'lng' : lng}
        
        return result
    
    def get_lleida_accessibility_by_id(self, id):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "accessibility/accservs/" + id);
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, p in enumerate(result):  
            
            street = p['street']
            place, (lat, lng) = self.geocoder.get_lat_lon_by_street_async(street, self.LLEIDA, self.BB_LLEIDA)
                    
            result[index]['geo'] = {'lat' : lat, 'lng' : lng}
        
        return result
    
    def get_lleida_accessibility_by_category_all(self):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "accessibility/accservs/category/all");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        return result
    
    def get_lleida_accessibility_by_category_id(self, id):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "accessibility/accservs/category/" + id);
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, p in enumerate(result):  
            
            street = p['street']
            place, (lat, lng) = self.geocoder.get_lat_lon_by_street_async(street, self.LLEIDA, self.BB_LLEIDA)
                    
            result[index]['geo'] = {'lat' : lat, 'lng' : lng}
        
        return result

    def get_lleida_accessibility_by_feature_all(self):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "accessibility/accservs/feature/all");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        return result
    
    def get_lleida_accessibility_by_feature_id(self, id):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "accessibility/accservs/feature/" + id);
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, p in enumerate(result):  
            
            street = p['street']
            place, (lat, lng) = self.geocoder.get_lat_lon_by_street_async(street, self.LLEIDA, self.BB_LLEIDA)
                    
            result[index]['geo'] = {'lat' : lat, 'lng' : lng}
        
        return result
    
    def get_lleida_accessibility_by_level_id(self, id):
        r = requests.get(self.OPENDAI_URL + self.LLEIDA_API + "accessibility/accservs/level/" + id);
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        for index, p in enumerate(result):  
            
            street = p['street']
            place, (lat, lng) = self.geocoder.get_lat_lon_by_street_async(street, self.LLEIDA, self.BB_LLEIDA)
                    
            result[index]['geo'] = {'lat' : lat, 'lng' : lng}
        
        return result
    
    def get_bcn_weather_all(self):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "weather/all/");
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        return result
    
    def get_bcn_traffic_current(self):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "streets/traffic/current"); 
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        
        return result    

    
    def get_streets_stretches_by_id(self, id):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "streets/stretches/" + id); 
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        return result
    
    
    def get_bcn_traffic_current_geojson(self):
        
        traffic_results = self.get_bcn_traffic_current()
        
        for index, t_r in enumerate(traffic_results):  
            id = t_r['id']
            street_result = self.get_streets_stretches_by_id(id)
            logging.debug('Got street stretch: ' + id)
            traffic_results[index]['street_stretch'] = street_result
            
        result = self.geocoder.get_traffic_geojson(traffic_results)
        
        return result
    
    def get_bcn_traffic_current_geojson_async(self):
        
        result = self.geocoder.get_traffic_geojson_async()
        
        return result
    
    
    def get_streets_all(self):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "streets/all"); 
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        return result
    
    
    def get_bcn_pollution_zone_all(self):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "pollution/zone/all"); 
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        return result
    
    def get_bcn_pollution_zone_id(self, id):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "pollution/zone/" + id); 
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        return result
        
    def get_bcn_polen_all(self):
        r = requests.get(self.OPENDAI_URL + self.BCN_API + "polen/all"); 
        payload = r.json()
        
        if payload['meta']['code'] != 200 :
            return {'error': payload['meta']['code']}
        
        result = payload['data']['entry']
        return result
        
