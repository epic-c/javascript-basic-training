// TODO try catch
function Foo(key){
    try{
        // step 1: 從資料庫找尋某資料，可能會失敗(例如資料庫無回應，這是種『異常』)
        let findResult = database.find(i => i.name === key);
        
        // step 2: 已經成功拿到資料
        // 經由解析器去解析資料庫回來的資料，可能會失敗(例如格式錯誤，這是種『異常』)
        let parse = JSON.parse(findResult)
        
        // step 3-1: 已經成功解析，如果其中的 field1 為 'bar'
        // 判斷基本不會失敗，這裡是『正常的』進入判斷
        if(parse.field1 === "bar"){
            console.log("field1 is bar.")
        }
        // step 3-2: 已經成功解析，如果其中的 field1 不為 'bar'
        // 判斷基本不會失敗，這裡是『正常的』進入除此之外
        else{
            console.log("field1 is other.")
        }
        // 如果程式『正常』(未有意外的失敗)的話
        // 無論是經過 if 或是 else，都不會進去 catch
        // 而是會在這裡結束
    }
    // 在經由 step 1 或是 step 2，如果出現失敗，就會立刻彈跳到 catch (異常、錯誤處理)
    catch(e){
        // e 就是失敗的格式
        // step 1 有資料庫回傳的失敗訊息，step 2 則是有解析器回傳的失敗訊息
        console.log(e)
    }
}