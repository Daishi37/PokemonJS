
 
 class Pokemon {
    constructor(name, pokedexId, size, weight, type, lifePoints, awName, awPoints, asName, asPoints) {
        this._name = name;
        this._pokedexId = pokedexId;
        this._size = size;
        this._weight = weight;
        this._type = type;
        this._lifePoints = lifePoints;
        this._attackWeak = new Attaque(awName, awPoints);
        this._attackStrong = new Attaque(asName, asPoints);
        this.maxLifePoints = lifePoints;
    }
    

    attaque(pkm) {
        let critical = Math.random();
        if (this._lifePoints > this.maxLifePoints/5 && critical < 0.1) {
            pkm.setLifePoints(pkm.getLifePoints() - (this._attackWeak.damage * 2 ));
            return (this._attackWeak.damage * 2);
        } else  if  (critical < 0.1) {
            pkm.setLifePoints(pkm.getLifePoints() - (this._attackStrong.damage * 2 ));
            return (this._attackStrong.damage * 2); } 
        else if (this._lifePoints > this.maxLifePoints/5 ) {
            pkm.setLifePoints(pkm.getLifePoints() - this._attackWeak.damage);
            return this._attackWeak.damage;
     
        } else {
            pkm.setLifePoints(pkm.getLifePoints() - this._attackStrong.damage);
            return this._attackStrong.damage; 
        }
    }

    getName() { return this._name; }
    setName(name) { this._name = name; }

    getLifePoints() { return this._lifePoints; }
    setLifePoints(lifePoints) { this._lifePoints = lifePoints; }

    getWeak() {return this._attackWeak;}
    setWeak(attackWeak) {this._attackWeak=attackWeak;}
    

    getStrong() {return this._attackStrong;}
    setStrong(attackStrong){this._attackStrong=attackStrong;}


     
    getPokedexId() { return this._pokedexId; }
    setPokedexId(pokedexId) { this._pokedexId = pokedexId}

    getSize() { return this._size; }
    setSize(size) { this._size = size; }

    getWeight() { return this._weight; }
    setWeight(weight) { this._weight = weight; }

    getType() { return this._type; }
    setType(type) { this._type = type; }
 }
