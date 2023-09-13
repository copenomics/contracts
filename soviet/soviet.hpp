// #pragma once

#include <eosio/binary_extension.hpp>
#include <eosio/eosio.hpp>
#include <eosio/ignore.hpp>
#include <eosio/transaction.hpp>
#include <eosio/asset.hpp>
#include <eosio/singleton.hpp>

#include "../common/consts.hpp"
#include "../common/utils.hpp"
#include "../common/users.hpp"
#include "../common/coops.hpp"
#include "../common/counts.hpp"
#include "../common/admins.hpp"

namespace eosio {
class [[eosio::contract(SOVIET)]] soviet : public eosio::contract {
public:
  using contract::contract;
   //soviet.cpp
  [[eosio::action]] void exec(eosio::name executer, eosio::name coop_username, uint64_t decision_id);
  [[eosio::action]] void newid(uint64_t decision_id);

  //admin.cpp
  [[eosio::action]] void addstaff(eosio::name coop_username, uint64_t board_id, eosio::name chairman, eosio::name username, std::vector<right> rights, std::string meta);
  [[eosio::action]] void rmstaff(eosio::name coop_username, uint64_t board_id, eosio::name chairman, eosio::name username);
  [[eosio::action]] void setrights(eosio::name coop_username, uint64_t board_id, eosio::name chairman, eosio::name username, std::vector<right> rights);
  [[eosio::action]] void validate(eosio::name coop_username, uint64_t board_id, eosio::name username, uint64_t decision_id);
  
  //regaccount.cpp
  [[eosio::action]] void joincoop(eosio::name coop_username, eosio::name username, std::string position_title, eosio::name position);
  
  static void joincoop_effect(eosio::name executer, eosio::name coop_username, uint64_t decision_id, uint64_t card_id);

  //automator.cpp
  [[eosio::action]] void automate(eosio::name coop_username, uint64_t board_id, eosio::name member, eosio::name action_type, eosio::name provider, std::string encrypted_private_key);
  [[eosio::action]] void disautomate(eosio::name coop_username, uint64_t board_id, eosio::name member, uint64_t automation_id );
  static void is_valid_action_for_automation(eosio::name action_type);
  
  //chairman.cpp
  [[eosio::action]] void authorize(eosio::name coop_username, eosio::name chairman, uint64_t decision_id);
  [[eosio::action]] void createboard(eosio::name coop_username, eosio::name chairman, eosio::name type, std::vector<board_member> members, std::string name, std::string description);
  
  //voting.cpp
  [[eosio::action]] void votefor(eosio::name coop_username, eosio::name member, uint64_t decision_id);
  [[eosio::action]] void voteagainst(eosio::name coop_username, eosio::name member, uint64_t decision_id);
  [[eosio::action]] void cancelvote(eosio::name coop_username, eosio::name member, uint64_t decision_id);

  //marketplace.cpp
  [[eosio::action]] void change(eosio::name coop_username, uint64_t exchange_id);
  static void change_effect(eosio::name executer, eosio::name coop_username, uint64_t decision_id, uint64_t card_id);
};
  

  struct [[eosio::table, eosio::contract(SOVIET)]] counts : counts_base {};
 
  struct [[eosio::table, eosio::contract(SOVIET)]] automator {
    uint64_t id;
    eosio::name coop_username;
    uint64_t board_id;
    eosio::name member;
    eosio::name action_type;
    eosio::name permission_name;
    std::string encrypted_private_key;

    uint64_t primary_key() const { return id; }
    uint128_t by_member_and_action_type() const { return combine_ids(member.value, action_type.value); }
    uint64_t by_action() const { return action_type.value; }

  };

  typedef eosio::multi_index< "automator"_n, automator,
    eosio::indexed_by<"byaction"_n, eosio::const_mem_fun<automator, uint64_t, &automator::by_action>>,
    eosio::indexed_by<"bymembaction"_n, eosio::const_mem_fun<automator, uint128_t, &automator::by_member_and_action_type>>
  > automator_index;


  struct [[eosio::table, eosio::contract(SOVIET)]] autosigner {
    uint64_t decision_id;
    uint64_t primary_key() const { return decision_id; }    
  };

  typedef eosio::multi_index< "autosigner"_n, autosigner> autosigner_index;


  struct [[eosio::table, eosio::contract(SOVIET)]] joincoops {
    uint64_t id;
    eosio::name username;
    bool is_paid = false; 
    std::string notice;

    uint64_t primary_key() const {
      return id;
    };
  };

  typedef eosio::multi_index<"joincoops"_n, joincoops> joincoops_index; 

  struct [[eosio::table, eosio::contract(SOVIET)]] changes {
    uint64_t exchange_id;//идентификатор обмена в контракте marketplace
    bool is_paid;//деньги получены на счёт кооператива  
    bool is_recieved;//товар получен плательщиком
    bool is_withdrawed;//деньги выплачены владельцу товара

    uint64_t primary_key() const {
      return exchange_id; 
    };
  };

  typedef eosio::multi_index<"changes"_n, changes> changes_index;


}
