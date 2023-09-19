import { IBasket } from "../basket/basketStructure"
import { IOrderList } from "./orderStructure";

export type OrderAction =
    | {
        type: "createOrder",
        basket:IBasket ;

    }

    | {
        type: "deleteUnpaidOrder", //odnosi se na brisanje ordera koji nije placen (kada se napusti forma za placanje)
        orderNo: number
    }
    | {
        type: "payOrder"
        orderNo: number
    }

export function orderReducer(
    oldOrderList: IOrderList,
    action: OrderAction
):IOrderList {
    function generateRandomNo(): number {
        let minm = 100000
        let maxm = 999999
        let randomNo=Math.floor(Math
                .random() * (maxm - minm + 1)) + minm
      let sameOrder=oldOrderList.orders.find((e)=>{
        if (e.orderNo===randomNo)
        return true
        else false
      }) 
      if (sameOrder)
      return generateRandomNo()
      else return randomNo
        
    } 
   
    switch (action.type) {
        case "deleteUnpaidOrder": {
            return {
                orders: oldOrderList.orders.filter((e) => {
                    if (e.orderNo != action.orderNo && e.paid===true) {
                        return true
                    }
                    else return false
                })
            }

        }


        case "createOrder": {

            return {
            orders:[
                ...oldOrderList.orders,
                {
                   orderNo: generateRandomNo(),
                   orderDate: Date(),
                   paid:false,
                   totalOrderItemsNo: action.basket.totalItemsNo,
                   totalOrderPrice:action.basket.totalPrice,
                   orderItems: action.basket.items.map((e)=>{
                    return {
                        productId:e.productId,
                        amountPrice:e.amountPrice,
                        color:e.color,
                        productAmount:e.productAmount,
                        size:e.size
                    }
                   })
                }
            ]
            }
        }
        default: return oldOrderList
    }
}

