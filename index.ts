enum speed {
    SLOW = 1,
    MEDIUM,
    MAX
}
class Fan {
    private speed: speed
    private status: boolean
    private radius: number
    private color: string

    constructor() {
        this.speed = speed.SLOW
        this.status = false
        this.radius = 5
        this.color = "blue"
    }

    getter() {
        return `speed:${this.speed} , status:${this.status}, radius:${this.radius}, color:${this.color}`
    }
    setOn(){
        this.status=true
    }
    setOff(){
        this.status=false
    }
    setColor(color:string){
        this.color=color
    }
    setRadius(radius:number){
        this.radius=radius
    }
    setSpeed(speed:speed) {
        this.speed = speed
    }

    toString(){
        if(this.status){
            console.log(`${this.getter()} Fan is on`)
        }else {
            console.log(`${this.getter()} Fan is off`)
        }
    }
}

let Fan1 = new Fan()
let Fan2 = new Fan()
Fan1.setSpeed(speed.MAX)
Fan1.setOn()
Fan1.setRadius(10)
Fan1.setColor("yellow")
Fan1.toString()
Fan2.setSpeed(speed.MEDIUM)
Fan2.setOff()
Fan2.setRadius(5)
Fan2.setColor("blue")
Fan2.toString()