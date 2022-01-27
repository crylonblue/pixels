class Universe {
    loadAssets(callback) {
        this.audioContext = new AudioContext()
        this.audioElement = new Audio("Cradles.mp3")
        this.audioElement.onloadeddata = () => {
            this.analyser = this.audioContext.createAnalyser()
            this.audioSource = this.audioContext.createMediaElementSource(this.audioElement)
            this.audioSource.connect(this.analyser)
            this.analyser.connect(this.audioContext.destination)
            this.audioElement.play()
            callback()
        }
    }

    flash() {
        for(let i = 0; i < this.pixels.length; i++){
            let p = this.pixels[i]
            p.radius =  Math.random() * 50 + 60
            p.toR = 255
            p.toG = 255
            p.toB = 255
            p.speedY -= p.radius / 2
            p.speedX += p.radius / 2
        }
    }

    movePixelsRandom() {
        for(let i = 0; i < this.pixels.length; i++) {
            let p = this.pixels[i]
            p.toX = this.width * Math.random()
            p.toY = this.height * Math.random()
        }
    }

    doLine() {
        for(let i = 0; i <  this.pixels.length; i++) {
            let p = this.pixels[i]
            p.toX = this.width * Math.random()
            p.toY = this.height / 2
        }
    }

    heart() {
        let randomy = this.getRandomNaturalNumber(this.height - 350, -250)
        let randomx = this.getRandomNaturalNumber(this.width - 600, -400)
        let heart = [[707,359],[707,359],[707,359],[707,359],[708,358],[711,354],[713,352],[714,348],[716,345],[720,335],[721,334],[722,333],[724,332],[725,330],[727,327],[731,322],[734,320],[737,318],[740,314],[743,312],[745,311],[749,309],[753,308],[757,306],[761,303],[764,302],[767,302],[771,301],[774,301],[778,301],[783,301],[786,301],[790,300],[796,300],[801,300],[805,300],[809,300],[811,300],[815,302],[817,303],[820,305],[822,306],[824,307],[827,309],[830,311],[834,313],[836,314],[838,316],[841,318],[844,321],[845,324],[847,326],[849,328],[852,332],[853,334],[855,336],[857,337],[858,339],[860,341],[862,345],[863,349],[863,352],[864,356],[864,359],[865,362],[866,364],[868,368],[869,372],[870,377],[871,381],[872,384],[872,388],[872,392],[872,395],[872,399],[872,401],[872,405],[872,409],[871,412],[870,417],[869,419],[869,422],[867,427],[866,429],[865,434],[863,438],[862,442],[861,443],[860,445],[857,448],[854,451],[852,454],[849,456],[846,459],[843,460],[836,466],[835,466],[833,467],[821,475],[820,477],[819,478],[817,481],[815,483],[811,486],[808,487],[803,491],[802,491],[800,492],[795,493],[791,497],[789,498],[786,498],[780,502],[772,507],[770,510],[767,511],[762,516],[758,520],[756,524],[753,527],[750,529],[746,532],[741,534],[736,537],[732,538],[731,539],[735,537],[735,537],[735,537],[730,543],[729,546],[727,551],[726,553],[723,555],[721,558],[715,568],[714,570],[714,572],[713,575],[708,585],[708,586],[707,586],[704,583],[704,359],[704,359],[700,356],[698,352],[697,350],[696,345],[694,343],[693,340],[690,335],[688,335],[687,334],[683,332],[681,329],[677,326],[675,323],[672,319],[669,314],[668,312],[663,310],[660,310],[656,310],[653,309],[647,309],[644,308],[642,308],[637,307],[632,303],[628,301],[624,297],[621,297],[619,297],[616,297],[616,298],[616,299],[614,300],[620,302],[620,302],[620,302],[618,302],[612,302],[605,302],[598,302],[596,303],[594,305],[592,307],[590,309],[586,310],[583,313],[582,315],[579,319],[576,320],[573,323],[571,325],[569,327],[563,329],[560,333],[558,336],[557,338],[556,341],[555,343],[551,346],[549,349],[549,354],[549,357],[547,361],[546,367],[543,372],[542,375],[541,380],[540,381],[540,382],[540,382],[540,382],[540,382],[540,384],[540,386],[540,389],[539,391],[539,394],[539,398],[539,404],[539,408],[539,412],[539,416],[540,423],[542,428],[544,433],[549,436],[552,439],[555,442],[557,445],[560,448],[562,452],[564,459],[565,461],[560,449],[560,449],[561,450],[571,458],[580,466],[584,469],[587,473],[589,476],[591,477],[575,466],[575,466],[575,466],[576,466],[582,471],[587,475],[590,477],[594,481],[598,484],[601,489],[604,491],[607,495],[611,496],[617,498],[622,500],[626,501],[629,504],[633,508],[636,510],[642,515],[650,522],[651,525],[655,528],[657,529],[660,530],[663,530],[667,533],[671,534],[676,536],[679,537],[681,539],[683,540],[676,536],[676,536],[676,536],[679,539],[684,546],[687,548],[689,551],[692,554],[696,558],[698,563],[701,567],[702,571],[704,574],[705,577],[706,579],[707,580],[708,582],[709,586]]
        for(let i=0; i < this.pixels.length; i++){
            let p = this.pixels[i]
            p.speedX = 0
            p.speedY = 0
            p.toX = (heart[Math.floor(i * 3) % heart.length][0]) + randomx
            p.toY = (heart[Math.floor(i * 3) % heart.length][1]) + randomy
        }
    }

    impulsY() {
        let factor = this.getRandomFloat(5,1)
        for(let i=0; i < this.pixels.length; i++){
            let p = this.pixels[i];
            p.speedX -= p.radius * factor
            p.speedY -= p.radius * factor
        }
    }

    impulsX() {
        let factor = this.getRandomFloat(5,1)
        for(let i = 0; i < this.pixels.length; i++){
            let p = this.pixels[i];
            p.speedX += p.radius * factor
            p.speedY -= p.radius * factor
        }
    }

    circle() {
        let r = this.getRandomFloat(250, 100)
        for(let i = 0; i < this.pixels.length; i++){
            let p = this.pixels[i]
            p.toX = this.width / 2 + Math.cos(i * 3.6 * Math.PI / 180) * r;
            p.toY = this.height / 2 + Math.sin(i * 3.6 * Math.PI / 180) * r;
        }
    }

    transition() {
        switch(this.getRandomNaturalNumber(7, 1)){
            case 1:
                this.heart()
            break
            case 2:
                this.impulsX()
            break
            case 3:
                this.impulsY()
            break
            case 4:
                this.flash()
            break
            case 5:
                this.circle()
            break
            case 6:
                this.movePixelsRandom()
            break
            case 7:
                this.doLine()
            break
        }


    }

    render() {
		this.context.clearRect(0, 0, this.width, this.height)

        this.freqData = new Uint8Array(this.analyser.frequencyBinCount)
        this.analyser.getByteFrequencyData(this.freqData)

        let diff = []

        for(let i = 0; i < this.freqData.length; i++) {
            diff[i] = this.freqData[i] - this.oldfreq[i]
            this.oldfreq[i] = this.freqData[i]
        }

		for(let i = 0; i < this.pixels.length; i++) {
            let p = this.pixels[i]
			this.context.beginPath()
			this.context.fillStyle = "rgb("+ p.toR +"," + p.toG + "," + p.toB + ")"
			this.context.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true)
			this.context.fill()
            this.context.closePath()
			p.x = p.x + (p.toX - p.x) /10
			p.y = p.y + (p.toY - p.y) /10
			p.toY += p.speedY
			p.toX += p.speedX
			p.speedX *= 0.975
			p.speedY *= 0.975
			p.speedX += this.getRandomFloat(0.02, -0.02)
			p.speedY += this.getRandomFloat(0.02, -0.02)


            if(diff[i]>0){
                p.radius += (this.freqData[i] * diff[i]) / 1000
            }

            if(p.radius < 1){
                p.radius = 1
            }
            
            p.radius *= 0.95

            if(p.x < 0) {
                p.x = this.width
                p.toX = this.width
            }

            if(p.x > this.width) {
                p.x = 0
                p.toX = 0
            }

            if(p.y < 0) {
                p.y = this.height
                p.toY = this.height
            }

            if(p.y > this.height) {
                p.y = 0
                p.toY = 0
            }

            if(p.toR != p.r){
                if(p.toR > p.r){
                    p.toR -= Math.floor((p.toR - p.r) / 40)
                }else{
                    p.toR += Math.floor((p.r - p.toR) / 40)
                }
            }

            if(p.toG != p.g){
                if(p.toG > p.g){
                    p.toG -= Math.floor((p.toG - p.g) / 40)
                }else{
                    p.toG += Math.floor((p.g - p.toG) / 40)
                }
            }

            if(p.toB != p.b){
                if(p.toB > p.b){
                    p.toB -= Math.floor((p.toB - p.b) / 40)
                }else{
                    p.toB += Math.floor((p.b - p.toB) / 40)
                }
            }
        }

		window.requestAnimationFrame(() => {
			this.render()
		})
    }

    getRandomNaturalNumber(max, min){
        let random = Math.floor(Math.random() * max) + min
        return random
    }

    getRandomFloat(max, min){
        let random = (Math.random() * (max - min)) + min
        return random
    }

    constructor(element, maxPixels = 50) {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.element = element
        this.element.width = this.width
        this.element.height = this.height
        this.context = element.getContext("2d")
        this.pixels = []

        this.freqData = new Uint8Array(256);
        this.oldfreq = new Uint8Array(256);

        window.onresize = () => {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.element.width = this.width
            this.element.height = this.height
        }

        window.onclick = () => {
            this.flash()
        }
        
        for(let i = 0; i < maxPixels; i++) {
            this.pixels[i] = {
				x: this.width * Math.random(),
				y: this.height * Math.random(),
				radius: 2,
				speedX: 0,
				speedY: 0,
                paused: false,
				r: this.getRandomNaturalNumber(255, 0),
				g: this.getRandomNaturalNumber(255, 0),
				b: this.getRandomNaturalNumber(255, 0)	
			}
			this.pixels[i].toR = this.pixels[i].r
			this.pixels[i].toG = this.pixels[i].g
			this.pixels[i].toB = this.pixels[i].b
			this.pixels[i].toX = this.pixels[i].x
			this.pixels[i].toY = this.pixels[i].y
        }

        this.loadAssets(() => {
            window.requestAnimationFrame(() => {
                this.render()
            })

            window.setInterval(() => {
                this.transition()
            }, 3000)
        })
    }
}

const playButton = document.querySelector(".playButton")

playButton.addEventListener("click", () => {
    playButton.classList.add("playing")
    new Universe(document.getElementById("canvas"), 100)
})