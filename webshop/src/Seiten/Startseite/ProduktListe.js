import Blanquette from "./Produktbilder/Blanquet_de_Limoux.jpg"
import Blutsbruder from "./Produktbilder/Blutsbruder_Rot.png"
import Grüner from "./Produktbilder/Grüner_Veltiner.jpg"
import Horny from "./Produktbilder/Horny_Rose.jpg"
import Krebs from "./Produktbilder/Krebs_weiss.jpg"
import Seductrice from "./Produktbilder/La_Seductrice.png"
import Libertin from "./Produktbilder/Le_Libertin.jpg"
import Luna from "./Produktbilder/Luna_et_Sole.png"
import Porcheria from "./Produktbilder/Porcheria.jpg"
import Urbulle from "./Produktbilder/Urbulle.jpg"
import Burgunder from "./Produktbilder/Weisser_Burgunder.jpg"

// Definition aller vorhandenen Produkte mit ID, Titel, Beschreibung und Bildern, die aus dem Ordner "Produktbilder" importiert werden

const ProduktListe = [
    {id: "1", Titel: "BLUTSBRUDER ROT", Beschreibung: "Wenn zwei Brüder in Winnetou-Old-Shatterhandartigem Einvernehmen in der ewigen Weite des Wonnegaus ein Weingut bewirtschaften, das echt und ehrlich Karl May heißt, dann muss es dort doch auch Weine Namens Blutsbruder geben.", Preis: 12 , Bild: Blutsbruder },
    {id: "2", Titel: "LA SEDUCTRICE", Beschreibung: "Die große Schwester der Maîtresse verführt die Sinne und fordert den Gaumen heraus. Die Trauben werden mit der Hand gelesen und geben ihr einen samtigen Charakter. Warme Aromen von Rumtopf, Brombeeren und Torf sowie feine Röstaromen machen sie zu einem echten Erlebnis.", Preis: 13 , Bild: Seductrice},
    {id: "3", Titel: "URBULLE", Beschreibung: "Ich wusste garnicht, dass man sowas aus Portugieser machen kann. So klang die erste Reaktion auf den Wein und die trifft auch gleich ins Schwarze. Dicht, samtig und anscheinend mit Urkraft kommt dieser Wein daher. Stark! Muss wohl von den alten Reben kommen...", Preis: 22, Bild: Urbulle},
    {id: "4", Titel: "PORCHERIA", Beschreibung: "Eine schweinische Cuvée aus dem Veneto von Contrà Soarda. Reife rote Früchte dominieren die Nase und werden durch das schön eingebundene Holz unterstützt. Am Gaumen finden sich weiche Tannine und ein elegantes, langanhaltendes Finish.", Preis: 14, Bild: Porcheria},
    {id: "5", Titel: "KREBS WEISS", Beschreibung: "Die Krebse haben mit ihrem Weissen einen charmanten und kecken Wein im Sommerkleidchen gemacht. Das erste mal riechen ist wie das Augenzwinkern einer Nymphe. Sommerblumen und Weinbergspfirsich riecht man sofort. Dazu ein schlanker Körper und ein bisschen Schmelz. Niedlich…", Preis: 9, Bild:  Krebs},
    {id: "6", Titel: "GRÜNER VELTLINER 2 HUT", Beschreibung: "Ein wahrer Exot. Es gibt nur eine geringe Menge der österreichischen Erfolgsrebsorte Grüner Veltliner aus Deutschland. Lukas Krauß zeigt den Österreichern, dass auch Andere sehr gute Weine aus deren Rebsorte kreieren können. Der Wein zeigt sich extrem geil. Reife Fruchtaromen gepaart mit einer dezenten Veltlinerwürze. Einmal gekostet bietet er viel Trinkvergnügen dank seinem langen Nachhall.", Preis: 15, Bild: Grüner },
    {id: "7", Titel: "HORNY ROSÉ", Beschreibung: "Aus dem Hause Hörner kommt ein Rosé vom Feinsten, d.h. leuchtende Farbe, fruchtige Nase, kleiner Würztouch und glorreiche Süffigkeit. Letzteres bedeutet für uns, dass man beim Trinken das Gefühl hat, als ob sich all die kleinen, einzelnen Tropfen an den Händen halten und über Deine Zunge tanzen, sodass man den fröhlichen Reigen nicht unterbrechen mag und einfach direkt den nächsten Schluck nimmt… Am besten macht man das übrigens mit einem Strohhut auf dem Kopf, während man das Gras beim Wachsen beobachtet.", Preis: 7, Bild: Horny},
    {id: "8", Titel: "BLANQUETTE DE LIMOUX", Beschreibung: "Der Blanquette de Limoux ist die kleine (heiße) Schwester des Cremants. Trotzdem müsst Ihr kein schlechtes Gewissen haben, wenn Ihr sie aufreißt. Hergestellt aus den regionalen Rebsorten Mauzac und Chenin Blanc entsteht ein Schaumwein, der ganz einfach Spaß macht. Frische Säure, helle Frucht und eine dezente Hefenote.", Preis: 15, Bild: Blanquette},
    {id: "9", Titel: "LE LIBERTIN - SAUVIGNON BLANC", Beschreibung: "Ein Frei- und Schöngeist in der Flasche. Irre Aromatik mit Litschi, Heu und Paprika. Am Gaumen dann grüner Apfel, Zitrus und Mandarine mit grünen Einschlägen.", Preis: 10, Bild: Libertin},
    {id: "10", Titel: "WEISSER BURGUNDER", Beschreibung: "Das ist mal richtig geiler Stoff! Rainer schafft den Spagat zwischen: Klassich und ungewöhnlich, kraftvoll und elegant, Frucht und Mineralität. Einfach probieren!", Preis: 8 , Bild: Burgunder},
    {id: "11", Titel: "LUNA ET SOLE", Beschreibung: "Luna ist der große Bruder vom schon bekannten Sole. Ein tiefgründiger Wein für die Abendstunden, der sich im Glas extrem entwickelt. Es lohnt sich, dem Wein einen Moment Zeit zu geben, bis er sich in vollster Pracht entfaltet. Luna et Sole lädt zu Gesprächen ein, passt zu Kerzenlicht und ist sogar der perfekte Begleiter fürs erste Date. Der Wein hat Aromen von frischen Brombeeren, schwarzer Johannisbeere, elegantem Kaffee und leichter Vanille - durch den Holzeinsatz. Kann jetzt wunderbar getrunken werden, aber auch erst in 2-3 Jahren.", Preis: 18 , Bild: Luna }
]

export default ProduktListe