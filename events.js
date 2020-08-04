const { listen } = require("./app");

let _events = new Array();


let events = {}

events.init = () => {
    _events = new Array();

    _events.push({
        description : "今日は天気がいい、どうする？",
        yes : {
            text : "家でのんびりする",
            food : 0,
            happy : 0,
            strength : 1,
            result : "何もしない時も幸せですね！"
        }, 
        no : {
            text : "外で散歩する",
            food : 0,
            happy : 1,
            strength : 0,
            result : "天気がいい時は外で遊ぶの楽しいね！"
        }
    });
    
    _events.push({
        description : "今日少し疲れてますけど映画館に面白い映画がある、どうする？",
        yes : {
            text : "楽しそうだから映画みにいく",
            food : 0,
            happy : 1,
            strength : -1,
            result : "ちょっと疲れたけど、楽しかった！"
        }, 
        no : {
            text : "とりあえずロイクにマッサージをする",
            food : 0,
            happy : 1,
            strength : 2,
            result : "ロイクがすごく元気になった！"
        }
    });
    
    _events.push({
        description : "ロイクがお腹がすいた",
        yes : {
            text : "ネットで難しい料理を探す",
            food : 2,
            happy : 1,
            strength : -1,
            result : "時間がかかったけどおいしかった"
        }, 
        no : {
            text : "Uber eatsで注文する",
            food : 1,
            happy : 0,
            strength : 1,
            result : "Uber eats便利だね！"
        }
    });
    
    _events.push({
        description : "今日マカロンを食べたい、どうする？",
        yes : {
            text : "自分で作ってみる！",
            food : -1,
            happy : -1,
            strength : -1,
            result : "あらま、難しいすぎて失敗した！"
        }, 
        no : {
            text : "Picardで買いに行く！",
            food : 1,
            happy : 1,
            strength : 0,
            result : "その方は安全だね！"
        }
    });
    
    _events.push({
        description : "今日運動をしたいですね",
        yes : {
            text : "アクロバティックにいこう！",
            food : 0,
            happy : 1,
            strength : -1,
            result : "楽しいけどちょっと怖かったね！"
        }, 
        no : {
            text : "海で泳ぎに行こう！",
            food : 0,
            happy : 2,
            strength : 0,
            result : "海はいつでも楽しいね！"
        }
    });
    
    _events.push({
        description : "今日ボーナス貰った、どうする？",
        yes : {
            text : "いいね！Disneyにいける！",
            food : 0,
            happy : 1,
            strength : -2,
            result : "楽しかったけど、人が多すぎたから疲れたね"
        }, 
        no : {
            text : "新しいゲーム機を買おう！",
            food : 0,
            happy : 2,
            strength : 0,
            result : "最新のゲームすごいね！"
        }
    });
    
    _events.push({
        description : "今日は旅行に行く日です！どこに行く？",
        yes : {
            text : "フランスでしょう！",
            food : 0,
            happy : 1,
            strength : -2,
            result : "あら、コロナだからいけない！"
        }, 
        no : {
            text : "東京から電車で行ける楽しい所行こうか！",
            food : 0,
            happy : 1,
            strength : 1,
            result : "日本も楽しい所いっぱいある！今コロナだから飛行機あぶないよ！"
        }
    });
    
    _events.push({
        description : "今日寿司食べに行く！何する？",
        yes : {
            text : "いくらを食べる！",
            food : -2,
            happy : -1,
            strength : 0,
            result : "ロイクはいくらが嫌いでしょう！"
        }, 
        no : {
            text : "うなぎ",
            food : 2,
            happy : 0,
            strength : 0,
            result : "うなぎ最高ね！"
        }
    });
    
    _events.push({
        description : "今日はゆかのパパと散歩したら、宝くじを買う事にした",
        yes : {
            text : "１０枚買う！",
            food : 0,
            happy : -1,
            strength : 0,
            result : "あら、全部はずれだった！悲しい！"
        }, 
        no : {
            text : "まあ２枚でいいかな",
            food : 0,
            happy : 1,
            strength : 0,
            result : "２０００円もらった！やった！"
        }
    });
    
    _events.push({
        description : "今日はゆかのパパと散歩したら、宝くじを買う事にした",
        yes : {
            text : "１０枚買う！",
            food : 0,
            happy : -1,
            strength : 0,
            result : "あら、全部はずれだった！悲しい！"
        }, 
        no : {
            text : "まあ２枚でいいかな",
            food : 0,
            happy : 1,
            strength : 0,
            result : "２０００円もらった！やった！"
        }
    });
    
    _events.push({
        description : "今日ロイクはあんまり寝れなかった、どうする？",
        yes : {
            text : "昼までに寝る",
            food : 0,
            happy : 0,
            strength : 1,
            result : "まああ、そのぐらいで元気になったでしょう！"
        }, 
        no : {
            text : "１６時まで寝る",
            food : 0,
            happy : 0,
            strength : -1,
            result : "寝すぎて、さらに疲れた！"
        }
    });
    
    _events.push({
        description : "今日ロイクはあんまり寝れなかった、どうする？",
        yes : {
            text : "昼までに寝る",
            food : 0,
            happy : 0,
            strength : 1,
            result : "まああ、そのぐらいで元気になったでしょう！"
        }, 
        no : {
            text : "１６時まで寝る",
            food : 0,
            happy : 0,
            strength : -1,
            result : "寝すぎて、さらに疲れた！"
        }
    });
    
    _events.push({
        description : "ロイクがゲームをしているけどゆかはロイクと別な事をしたい",
        yes : {
            text : "ゲームを辞めさせる",
            food : 0,
            happy : -2,
            strength : 0,
            result : "それはだめでしょう！"
        }, 
        no : {
            text : "すこしだけ一緒にゲームしてから、一緒に別な事をする",
            food : 0,
            happy : 2,
            strength : 0,
            result : "それいいね！"
        }
    });
    
    _events.push({
        description : "今日雨だから外出れないからどうする？",
        yes : {
            text : "近くのレストランでご飯食べに行く",
            food : 1,
            happy : 0,
            strength : -1,
            result : "雨だから行くのは大変だった"
        }, 
        no : {
            text : "ベッドでごろごろする",
            food : 0,
            happy : 1,
            strength : 1,
            result : "それいいね！"
        }
    });
    
    _events.push({
        description : "今日はWhite dayだ！どうする？",
        yes : {
            text : "ロイクにチョコのお菓子をあげる",
            food : -1,
            happy : 1,
            strength : 0,
            result : "ロイクはチョコはあんまり好きじゃあないけど、嬉しかったよ"
        }, 
        no : {
            text : "バナナ味のお菓子をあげる",
            food : 1,
            happy : 1,
            strength : 0,
            result : "Good choice !"
        }
    });
    
    _events.push({
        description : "ロイクの誕生日だ！どうする？",
        yes : {
            text : "あら、ロイクの誕生日はいつだっけ？",
            food : -10,
            happy : -10,
            strength : -10,
            result : "わすれるのはだめでしょう！"
        }, 
        no : {
            text : "ロイクが前から欲しいものをSurpiseプレゼントにする",
            food : 0,
            happy : 2,
            strength : 0,
            result : "やった！"
        }
    });
    
    _events.push({
        description : "ロイクは風を引いた、どうする？",
        yes : {
            text : "ご飯を準備する",
            food : 1,
            happy : 0,
            strength : 1,
            result : "ありがとう！"
        }, 
        no : {
            text : "平野の掃除をする",
            food : 0,
            happy : 0,
            strength : 1,
            result : "優しいね :)"
        }
    });
    
}

events.list = () => {
    return _events
}

events.shuffle = () => {
    _events.sort(() => Math.random() - 0.5);
}

module.exports = events;