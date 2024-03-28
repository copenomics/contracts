// Generated by eosio-abi2ts 1.2.2 - eosio::abi/1.2

export type Asset = string
export type Name = string
export type Bytes = string | number[] | Uint8Array
export type Checksum256 = string
export type PublicKey = string
export type Symbol = string
export type TimePoint = string
export type TimePointSec = string
export type BlockTimestampType = string
export type Int64 = number | string
export type Uint8 = number
export type Uint16 = number
export type Uint32 = number
export type Uint64 = number | string
export type Uint128 = string
export type Float64 = number

export type BlockSigningAuthority = VariantBlockSigningAuthorityV0
export type BlockchainParametersT = BlockchainParametersV1

export type VariantBlockSigningAuthorityV0 = ['block_signing_authority_v0', BlockSigningAuthorityV0]

export interface AbiHash {
  owner: Name
  hash: Checksum256
}

export interface Activate {
  feature_digest: Checksum256
}

export interface Authority {
  threshold: Uint32
  keys: KeyWeight[]
  accounts: PermissionLevelWeight[]
  waits: WaitWeight[]
}

export interface BidRefund {
  bidder: Name
  amount: Asset
}

export interface Bidname {
  bidder: Name
  newname: Name
  bid: Asset
}

export interface Bidrefund {
  bidder: Name
  newname: Name
}

export interface BlockHeader {
  timestamp: Uint32
  producer: Name
  confirmed: Uint16
  previous: Checksum256
  transaction_mroot: Checksum256
  action_mroot: Checksum256
  schedule_version: Uint32
  new_producers?: ProducerSchedule
}

export interface BlockInfoRecord {
  version: Uint8
  block_height: Uint32
  block_timestamp: TimePoint
}

export interface BlockSigningAuthorityV0 {
  threshold: Uint32
  keys: KeyWeight[]
}

export interface BlockchainParameters {
  max_block_net_usage: Uint64
  target_block_net_usage_pct: Uint32
  max_transaction_net_usage: Uint32
  base_per_transaction_net_usage: Uint32
  net_usage_leeway: Uint32
  context_free_discount_net_usage_num: Uint32
  context_free_discount_net_usage_den: Uint32
  max_block_cpu_usage: Uint32
  target_block_cpu_usage_pct: Uint32
  max_transaction_cpu_usage: Uint32
  min_transaction_cpu_usage: Uint32
  max_transaction_lifetime: Uint32
  deferred_trx_expiration_window: Uint32
  max_transaction_delay: Uint32
  max_inline_action_size: Uint32
  max_inline_action_depth: Uint16
  max_authority_depth: Uint16
}

export interface BlockchainParametersV1 extends BlockchainParameters {
  max_action_return_value_size: Uint32$
}

export interface Buyram {
  payer: Name
  receiver: Name
  quant: Asset
}

export interface Buyrambytes {
  payer: Name
  receiver: Name
  bytes: Uint32
}

export interface Buyrex {
  from: Name
  amount: Asset
}

export interface Canceldelay {
  canceling_auth: PermissionLevel
  trx_id: Checksum256
}

export interface Cfgpowerup {
  args: PowerupConfig
}

export interface Claimrewards {
  owner: Name
}

export interface Closerex {
  owner: Name
}

export interface Cnclrexorder {
  owner: Name
}

export interface Connector {
  balance: Asset
  weight: Float64
}

export interface Consolidate {
  owner: Name
}

export interface Defcpuloan {
  from: Name
  loan_num: Uint64
  amount: Asset
}

export interface Defnetloan {
  from: Name
  loan_num: Uint64
  amount: Asset
}

export interface Delegatebw {
  from: Name
  receiver: Name
  stake_net_quantity: Asset
  stake_cpu_quantity: Asset
  transfer: boolean
}

export interface DelegatedBandwidth {
  from: Name
  to: Name
  net_weight: Asset
  cpu_weight: Asset
}

export interface Deleteauth {
  account: Name
  permission: Name
  authorized_by: Name$
}

export interface Deposit {
  owner: Name
  amount: Asset
}

export interface Emit {
}

export interface EosioGlobalState extends BlockchainParameters {
  max_ram_size: Uint64
  total_ram_bytes_reserved: Uint64
  total_ram_stake: Int64
  last_producer_schedule_update: BlockTimestampType
  last_pervote_bucket_fill: TimePoint
  pervote_bucket: Int64
  perblock_bucket: Int64
  total_unpaid_blocks: Uint32
  total_activated_stake: Int64
  thresh_activated_stake_time: TimePoint
  last_producer_schedule_size: Uint16
  total_producer_vote_weight: Float64
  last_name_close: BlockTimestampType
}

export interface EosioGlobalState2 {
  new_ram_per_block: Uint16
  last_ram_increase: BlockTimestampType
  last_block_num: BlockTimestampType
  total_producer_votepay_share: Float64
  revision: Uint8
}

export interface EosioGlobalState3 {
  last_vpay_state_update: TimePoint
  total_vpay_share_change_rate: Float64
}

export interface EosioGlobalState4 {
  continuous_rate: Float64
  inflation_pay_factor: Int64
  votepay_factor: Int64
}

export interface ExchangeState {
  supply: Asset
  base: Connector
  quote: Connector
}

export interface Fundcpuloan {
  from: Name
  loan_num: Uint64
  payment: Asset
}

export interface Fundnetloan {
  from: Name
  loan_num: Uint64
  payment: Asset
}

export interface Init {
  version: Varuint32
  core: Symbol
}

export interface KeyWeight {
  key: PublicKey
  weight: Uint16
}

export interface Limitauthchg {
  account: Name
  allow_perms: Name[]
  disallow_perms: Name[]
}

export interface Linkauth {
  account: Name
  code: Name
  type: Name
  requirement: Name
  authorized_by: Name$
}

export interface Mvfrsavings {
  owner: Name
  rex: Asset
}

export interface Mvtosavings {
  owner: Name
  rex: Asset
}

export interface NameBid {
  newname: Name
  high_bidder: Name
  high_bid: Int64
  last_bid_time: TimePoint
}

export interface Newaccount {
  creator: Name
  name: Name
  owner: Authority
  active: Authority
}

export interface Onblock {
  header: BlockHeader
}

export interface Onerror {
  sender_id: Uint128
  sent_trx: Bytes
}

export interface PairTimePointSecInt64 {
  first: TimePointSec
  second: Int64
}

export interface PermissionLevel {
  actor: Name
  permission: Name
}

export interface PermissionLevelWeight {
  permission: PermissionLevel
  weight: Uint16
}

export interface Powerup {
  payer: Name
  receiver: Name
  days: Uint32
  net_frac: Int64
  cpu_frac: Int64
  max_payment: Asset
}

export interface PowerupConfig {
  net: PowerupConfigResource
  cpu: PowerupConfigResource
  powerup_days?: Uint32
  min_powerup_fee?: Asset
}

export interface PowerupConfigResource {
  current_weight_ratio?: Int64
  target_weight_ratio?: Int64
  assumed_stake_weight?: Int64
  target_timestamp?: TimePointSec
  exponent?: Float64
  decay_secs?: Uint32
  min_price?: Asset
  max_price?: Asset
}

export interface PowerupOrder {
  version: Uint8
  id: Uint64
  owner: Name
  net_weight: Int64
  cpu_weight: Int64
  expires: TimePointSec
}

export interface PowerupState {
  version: Uint8
  net: PowerupStateResource
  cpu: PowerupStateResource
  powerup_days: Uint32
  min_powerup_fee: Asset
}

export interface PowerupStateResource {
  version: Uint8
  weight: Int64
  weight_ratio: Int64
  assumed_stake_weight: Int64
  initial_weight_ratio: Int64
  target_weight_ratio: Int64
  initial_timestamp: TimePointSec
  target_timestamp: TimePointSec
  exponent: Float64
  decay_secs: Uint32
  min_price: Asset
  max_price: Asset
  utilization: Int64
  adjusted_utilization: Int64
  utilization_timestamp: TimePointSec
}

export interface Powerupexec {
  user: Name
  max: Uint16
}

export interface ProducerInfo {
  owner: Name
  total_votes: Float64
  producer_key: PublicKey
  is_active: boolean
  url: string
  unpaid_blocks: Uint32
  last_claim_time: TimePoint
  location: Uint16
  producer_authority: BlockSigningAuthority$
}

export interface ProducerInfo2 {
  owner: Name
  votepay_share: Float64
  last_votepay_share_update: TimePoint
}

export interface ProducerKey {
  producer_name: Name
  block_signing_key: PublicKey
}

export interface ProducerSchedule {
  version: Uint32
  producers: ProducerKey[]
}

export interface Refund {
  owner: Name
}

export interface RefundRequest {
  owner: Name
  request_time: TimePointSec
  net_amount: Asset
  cpu_amount: Asset
}

export interface Regproducer {
  producer: Name
  producer_key: PublicKey
  url: string
  location: Uint16
}

export interface Regproducer2 {
  producer: Name
  producer_authority: BlockSigningAuthority
  url: string
  location: Uint16
}

export interface Regproxy {
  proxy: Name
  isproxy: boolean
}

export interface Rentcpu {
  from: Name
  receiver: Name
  loan_payment: Asset
  loan_fund: Asset
}

export interface Rentnet {
  from: Name
  receiver: Name
  loan_payment: Asset
  loan_fund: Asset
}

export interface RexBalance {
  version: Uint8
  owner: Name
  vote_stake: Asset
  rex_balance: Asset
  matured_rex: Int64
  rex_maturities: PairTimePointSecInt64[]
}

export interface RexFund {
  version: Uint8
  owner: Name
  balance: Asset
}

export interface RexLoan {
  version: Uint8
  from: Name
  receiver: Name
  payment: Asset
  balance: Asset
  total_staked: Asset
  loan_num: Uint64
  expiration: TimePoint
}

export interface RexOrder {
  version: Uint8
  owner: Name
  rex_requested: Asset
  proceeds: Asset
  stake_change: Asset
  order_time: TimePoint
  is_open: boolean
}

export interface RexPool {
  version: Uint8
  total_lent: Asset
  total_unlent: Asset
  total_rent: Asset
  total_lendable: Asset
  total_rex: Asset
  namebid_proceeds: Asset
  loan_num: Uint64
}

export interface RexReturnBuckets {
  version: Uint8
  return_buckets: PairTimePointSecInt64[]
}

export interface RexReturnPool {
  version: Uint8
  last_dist_time: TimePointSec
  pending_bucket_time: TimePointSec
  oldest_bucket_time: TimePointSec
  pending_bucket_proceeds: Int64
  current_rate_of_increase: Int64
  proceeds: Int64
}

export interface Rexexec {
  user: Name
  max: Uint16
}

export interface Rmvproducer {
  producer: Name
}

export interface Sellram {
  account: Name
  bytes: Int64
}

export interface Sellrex {
  from: Name
  rex: Asset
}

export interface Setabi {
  account: Name
  abi: Bytes
  memo: String$
}

export interface Setacctcpu {
  account: Name
  cpu_weight?: Int64
}

export interface Setacctnet {
  account: Name
  net_weight?: Int64
}

export interface Setacctram {
  account: Name
  ram_bytes?: Int64
}

export interface Setalimits {
  account: Name
  ram_bytes: Int64
  net_weight: Int64
  cpu_weight: Int64
}

export interface Setcode {
  account: Name
  vmtype: Uint8
  vmversion: Uint8
  code: Bytes
  memo: String$
}

export interface Setinflation {
  annual_rate: Int64
  inflation_pay_factor: Int64
  votepay_factor: Int64
}

export interface Setparams {
  params: BlockchainParametersT
}

export interface Setpriv {
  account: Name
  is_priv: Uint8
}

export interface Setram {
  max_ram_size: Uint64
}

export interface Setramrate {
  bytes_per_block: Uint16
}

export interface Setrex {
  balance: Asset
}

export interface Undelegatebw {
  from: Name
  receiver: Name
  unstake_net_quantity: Asset
  unstake_cpu_quantity: Asset
}

export interface Unlinkauth {
  account: Name
  code: Name
  type: Name
  authorized_by: Name$
}

export interface Unregprod {
  producer: Name
}

export interface Unstaketorex {
  owner: Name
  receiver: Name
  from_net: Asset
  from_cpu: Asset
}

export interface Updateauth {
  account: Name
  permission: Name
  parent: Name
  auth: Authority
  authorized_by: Name$
}

export interface Updaterex {
  owner: Name
}

export interface Updtrevision {
  revision: Uint8
}

export interface UserResources {
  owner: Name
  net_weight: Asset
  cpu_weight: Asset
  ram_bytes: Int64
}

export interface Voteproducer {
  voter: Name
  proxy: Name
  producers: Name[]
}

export interface VoterInfo {
  owner: Name
  proxy: Name
  producers: Name[]
  staked: Int64
  last_vote_weight: Float64
  proxied_vote_weight: Float64
  is_proxy: boolean
  flags1: Uint32
  reserved2: Uint32
  reserved3: Asset
}

export interface Voteupdate {
  voter_name: Name
}

export interface WaitWeight {
  wait_sec: Uint32
  weight: Uint16
}

export interface Wasmcfg {
  settings: Name
}

export interface Withdraw {
  owner: Name
  amount: Asset
}

export interface LimitAuthChange {
  version: Uint8
  account: Name
  allow_perms: Name[]
  disallow_perms: Name[]
}
