--------------------------------------------------------------------------------------------------------
--          Configuration
--------------------------------------------------------------------------------------------------------

-- system linux
luaDir = debug.getinfo(1).source:match("@?(.*/)")
curl = '/usr/bin/curl -m 15 '		 							-- ne pas oublier l'espace à la fin


-- chargement du fichier JSON.lua
json = assert(loadfile(luaDir..'JSON.lua'))()

fonction = assert(loadfile(luaDir..'fonctions.lua'))()
note = assert(loadfile('/home/limabravo/bin/reminder.json'))()

--------------------------------------------------------------------------------------------------------
--          Parametres
--------------------------------------------------------------------------------------------------------
-- rpi2
rpi2IP = "127.0.0.1"	--'127.0.0.1'
-- rpi3
rpi3IP = "192.168.0.40"

domoticzPORT = "8080"
domoticzUSER = ""		
domoticzPSWD = ""
domoticzPASSCODE = ""	-- pour interrupteur protégés
jarvisPORT = "8080"

domoticzURL = "http://"..domoticzIP..":"..domoticzPORT
JarvisURL = "http://"..rpi3IP..":"..jarvisPORT

--------------------------------------------------------------------------------------------------------
--			Raccourcis
--------------------------------------------------------------------------------------------------------
commandArray = {}
od = otherdevices
dc = devicechanged
uv = uservariables
vc = uservariablechanged
ca = commandArray
-- retourne l'heure actuelle ex: "12:45"
heure = string.sub(os.date("%X"), 1, 5)

-- retourne la date ex: "01:01"
date = os.date("%d:%m")

-- retourne l'heure du lever de soleil ex: "06:41"
leverSoleil = string.sub(os.date("!%X",60*timeofday['SunriseInMinutes']), 1, 5)

-- retourne l'heure du coucher de soleil ex: "22:15"
coucherSoleil = string.sub(os.date("!%X",60*timeofday['SunsetInMinutes']), 1, 5)

-- retourne le jour actuel en français ex: "mardi"
days = {"dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"}
jour = days[(os.date("%w")+1)]

-- il fait jour
dayTime = timeofday['Daytime']
-- il fait nuit
nightTime = timeofday['Nighttime']
