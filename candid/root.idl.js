/* Do not edit.  Compiled with ./scripts/compile-idl-js from candid/root.did */
export const idlFactory = ({ IDL }) => {
  const CanisterStatusType_1 = IDL.Variant({
    'stopped' : IDL.Null,
    'stopping' : IDL.Null,
    'running' : IDL.Null,
  });
  const DefiniteCanisterSettingsArgs = IDL.Record({
    'controller' : IDL.Principal,
    'freezing_threshold' : IDL.Nat,
    'controllers' : IDL.Vec(IDL.Principal),
    'memory_allocation' : IDL.Nat,
    'compute_allocation' : IDL.Nat,
  });
  const CanisterStatusResultV2 = IDL.Record({
    'controller' : IDL.Principal,
    'status' : CanisterStatusType_1,
    'freezing_threshold' : IDL.Nat,
    'balance' : IDL.Vec(IDL.Tuple(IDL.Vec(IDL.Nat8), IDL.Nat)),
    'memory_size' : IDL.Nat,
    'cycles' : IDL.Nat,
    'settings' : DefiniteCanisterSettingsArgs,
    'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'idle_cycles_burned_per_second' : IDL.Nat,
  });
  return IDL.Service({
    'get_sns_canisters_summary' : IDL.Func(
        [IDL.Vec(IDL.Principal)],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Principal, CanisterStatusResultV2))],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
