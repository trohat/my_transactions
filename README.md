Final project for a React course taught in Inventi in Prague in October 2018.

# Aplikace Peněženka

Aplikace slouží ke každodenní evidenci příjmů a výdajů. Lze sledovat celkovou bilanci účtu za určité období.

## Popis
Aplikace obsahuje 2 různé obrazovky:

- Transakce
- Přehledy

### Obrazovka Transakce

**Transakce** má následující hodnoty:
- Typ (příjem, výdej)
- Název
- Částka
- Datum a čas vytvoření

Transakce je možné filtrovat podle typu (příjem, výdaj, všechny). Dále lze zobrazit jen transakce za aktuální den nebo poslední měsíc (zhruba posledních třicet dní). Také je možno transakce řadit podle data transakce.

Transakce je možné přidávat, editovat a mazat.
<br>

### Obrazovka Přehledy

V přehledech lze zobrazit celkové příjmy a výdaje za určité období. Datum se zadává pomocí chytrých vstupů, které reagují na aktuální datum (při změně měsíce se přizpůsobí počet dní). Při zadání nesmyslného data i nesmyslného období (od > do) se zobrazí chybové hlášky.
<br>

### Rozběhnutí aplikace

Pro nainstalování závislostí použijte
```
npm install
```

Pro spuštění serveru
```
npm run server
```
(spustí se na portu 3004)


A pro spuštění aplikace
```
npm run start
```

Aplikace je optimalizována pro zobrazení na desktopu a notebooku.
