export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxab47a1003108efd2",
    // 公众号appSecret
    appSecret: "3d90cae5fee9786abc57db86af407fa7",
    // 模板消息id
    templateId: "XVh9G7N-WbDEc4xaW-lAjXBF5tFgGnIgrEeD7CVOTaw",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oOK4m6ovG2YL2GGQCgLysIJQLbKo","oOK4m6gGqdsLlHDGFzQjif1l1RMw"],
     
    // 信息配置
    // 所在省份
    province: "福建",
    // 所在城市
    city: "厦门",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "觉觉", "year": "2002", "date": "06-17", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2020-08-26"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低温度: {{min_temperature.DATA}}  
// 最高温度: {{max_temperature.DATA}}  
// 今天是我们在一起的第{{love_day.DATA}}天
// 距离我们觉觉的生日还有{{birthday_message.DATA}}天

// {{note_en.DATA}}  
// {{note_ch.DATA}}
