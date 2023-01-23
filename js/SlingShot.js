//restrição = juntar dois corpos (pendulo : ex colar, mouse, caregador ets | fio e alguma coisa)

class Slingshot{
    constructor(bodyA, pointB)
    {
        var options = {
            bodyA: bodyA, //corda
            pointB: pointB, //vai ser na fruta
            stiffness: 0.04, //quão balançante ela vai ser
            length: 100 //tamanho
        }
        this.sling = Constraint.create(options); //criar uma restrição (constraint) - grudar 
        this.pointB=pointB;

        World.add(world, this.sling);

    }
    fly()
    {
        this.sling.bodyA =null;
    }
    display()
    {
        //formação do corpo A
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB; //corpo B
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y); //corpo A : vai ser uma linha
        }
        }
    
}