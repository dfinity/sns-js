/* Do not edit.  Compiled with ./scripts/compile-idl-js from candid/swap.did */
export const idlFactory = ({ IDL }) => {
  const Init = IDL.Record({
    'min_participant_icp_e8s' : IDL.Nat64,
    'max_icp_e8s' : IDL.Nat64,
    'min_participants' : IDL.Nat32,
    'token_sale_timestamp_seconds' : IDL.Nat64,
    'nns_governance_canister_id' : IDL.Text,
    'icp_ledger_canister_id' : IDL.Text,
    'sns_ledger_canister_id' : IDL.Text,
    'sns_governance_canister_id' : IDL.Text,
  });
  const SweepResult = IDL.Record({
    'failure' : IDL.Nat32,
    'skipped' : IDL.Nat32,
    'success' : IDL.Nat32,
  });
  const FinalizeSaleResponse = IDL.Record({
    'sweep_icp' : IDL.Opt(SweepResult),
    'sweep_sns' : IDL.Opt(SweepResult),
    'create_neuron' : IDL.Opt(SweepResult),
  });
  const GetCanisterStatusResponse = IDL.Record({
    'canister_cycle_balance' : IDL.Nat64,
  });
  const BuyerState = IDL.Record({
    'icp_disbursing' : IDL.Bool,
    'amount_sns_e8s' : IDL.Nat64,
    'amount_icp_e8s' : IDL.Nat64,
    'sns_disbursing' : IDL.Bool,
  });
  const State = IDL.Record({
    'sns_token_e8s' : IDL.Nat64,
    'lifecycle' : IDL.Int32,
    'buyers' : IDL.Vec(IDL.Tuple(IDL.Text, BuyerState)),
  });
  const Sale = IDL.Record({ 'init' : IDL.Opt(Init), 'state' : IDL.Opt(State) });
  const DerivedState = IDL.Record({
    'sns_tokens_per_icp' : IDL.Float32,
    'buyer_total_icp_e8s' : IDL.Nat64,
  });
  const GetStateResponse = IDL.Record({
    'sale' : IDL.Opt(Sale),
    'derived' : IDL.Opt(DerivedState),
  });
  const RefreshBuyerTokensRequest = IDL.Record({ 'buyer' : IDL.Text });
  return IDL.Service({
    'finalize_sale' : IDL.Func([IDL.Record({})], [FinalizeSaleResponse], []),
    'get_canister_status' : IDL.Func(
        [IDL.Record({})],
        [GetCanisterStatusResponse],
        [],
      ),
    'get_state' : IDL.Func([IDL.Record({})], [GetStateResponse], []),
    'open_sale' : IDL.Func([IDL.Record({})], [IDL.Record({})], []),
    'refresh_buyer_tokens' : IDL.Func(
        [RefreshBuyerTokensRequest],
        [IDL.Record({})],
        [],
      ),
    'refresh_sns_tokens' : IDL.Func([IDL.Record({})], [IDL.Record({})], []),
  });
};
export const init = ({ IDL }) => {
  const Init = IDL.Record({
    'min_participant_icp_e8s' : IDL.Nat64,
    'max_icp_e8s' : IDL.Nat64,
    'min_participants' : IDL.Nat32,
    'token_sale_timestamp_seconds' : IDL.Nat64,
    'nns_governance_canister_id' : IDL.Text,
    'icp_ledger_canister_id' : IDL.Text,
    'sns_ledger_canister_id' : IDL.Text,
    'sns_governance_canister_id' : IDL.Text,
  });
  return [Init];
};
