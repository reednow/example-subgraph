import { Record } from '../generated/schema'
import {Address, BigDecimal, BigInt, ethereum, log} from '@graphprotocol/graph-ts'
import {Transfer} from "../generated/Gravity/ERC20";


export function handleTransfer(event: Transfer): void {
  let record = new Record(event.transaction.hash.toHex())
  record.block = event.block.number
  record.from = event.params.from
  record.to = event.params.to
  record.timestamp = event.block.timestamp
  record.save()
}

export function handleBlock(block: ethereum.Block): void {
  log.warning("current block number is " + block.number.toString(),[])
}
