trash: simulator/*.ts ias/*.ts
	tsc simulator/*.ts ias/*.ts

clean: 
	rm simulator/*.js ias/*.js