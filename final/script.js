let searchUi = ".search_ui"; // 絞り込み検索条件設定エリア
let listItem = document.getElementsByClassName('item'); // 検索対象アイテム
let hideItem = "hide_item"; // 対象外アイテムに付与されるclass名
let checkBox = 'input[name="size"]'; //チェックボックスのnameを指定

// 絞り込み条件の変更
$(function () {
  $(document).on("change", searchUi + " input", function () {
    search_filter();
  });
});

function search_filter() {
  // 非表示状態を解除
  $(listItem).removeClass(hideItem);
  for (let i = 0; i < $(searchUi).length; i++) {
    let name = $(searchUi).eq(i).find("input").attr("name");
    // チェックされた検索条件を取得
    let searchData = get_selected_input_items(name);
    // チェック項目無し or 全てを選択している場合
    if (searchData.length === 0 || searchData[0] === "") {
      continue;
    }
    // リスト内の各アイテムをチェック
    for (let j = 0; j < $(listItem).length; j++) {
      // アイテムに設定している項目を取得
      let itemData = get_setting_values_in_item($(listItem).eq(j), name);
      // 絞り込み対象かどうかを調べる
      let check = array_match_check(itemData, searchData);
      if (!check) {
        $(listItem).eq(j).addClass(hideItem);
      }
    }
  }
}

// チェックの入った値の一覧を取得する
function get_selected_input_items(name) {
  let searchData = [];
  $("[name=" + name + "]:checked").each(function () {
    searchData.push($(this).val());
  });
  return searchData;
}

// リスト内のアイテムに設定している値の一覧を取得する
function get_setting_values_in_item(target, data) {
  let itemData = target.data(data);
  if (!Array.isArray(itemData)) {
    itemData = [itemData];
  }
  return itemData;
}

// 2つの配列内で一致する文字列があるかどうかを調べる
function array_match_check(arr1, arr2) {
  // 絞り込み対象かどうかを調べる
  let arrCheck = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) >= 0) {
      arrCheck = true;
      break;
    }
  }
  return arrCheck;
}

// 全サイズ選択解除
$(function () {
  $("#checkAll").on("click", function () {
    $(".size_sort").prop("checked", this.checked);
  });
  $(".size_sort").on("click", function () {
    if ($("#sizeBox :checked").length == $("#sizeBox :input").length) {
      $("#checkAll").prop("checked", "checked");
    } else {
      $("#checkAll").prop("checked", false);
    }
  });
});

//ハンバーガーメニューの表示非表示
$(function() {
  $(".hamburger").click(function() {
      $(".menu-bar").slideToggle("");
  });
});

//クリップボードにコピー
function copyToClipboard1(){
  var copyTarget = document.getElementById("copyTarget1");
  copyTarget.select();
  document.execCommand("Copy");
}
function copyToClipboard2(){
  var copyTarget = document.getElementById("copyTarget2");
  copyTarget.select();
  document.execCommand("Copy");
}
function copyToClipboard3(){
  var copyTarget = document.getElementById("copyTarget3");
  copyTarget.select();
  document.execCommand("Copy");
}
function copyToClipboard4(){
  var copyTarget = document.getElementById("copyTarget4");
  copyTarget.select();
  document.execCommand("Copy");
}
function copyToClipboard5(){
  var copyTarget = document.getElementById("copyTarget5");
  copyTarget.select();
  document.execCommand("Copy");
}
function copyToClipboard6(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard7(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard8(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard9(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard10(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard11(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard12(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard13(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard14(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard15(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard16(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard17(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard18(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard19(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}
function copyToClipboard20(){
    var copyTarget = document.getElementById("copyTarget5");
    copyTarget.select();
    document.execCommand("Copy");
}

//タイルの表示非表示
//手紙
$(function() {
  $(".A").click(function() {
      $(".A1").slideToggle("");
  });
});
$(function() {
  $(".B").click(function() {
      $(".B1").slideToggle("");
  });
});
$(function() {
  $(".C").click(function() {
      $(".C1").slideToggle("");
  });
});
$(function() {
  $(".D").click(function() {
      $(".D1").slideToggle("");
  });
});
$(function() {
  $(".E").click(function() {
      $(".E1").slideToggle("");
  });
});
//メール
$(function() {
  $(".F").click(function() {
      $(".F1").slideToggle("");
  });
});
$(function() {
  $(".G").click(function() {
      $(".G1").slideToggle("");
  });
});
$(function() {
  $(".H").click(function() {
      $(".H1").slideToggle("");
  });
});
$(function() {
  $(".I").click(function() {
      $(".I1").slideToggle("");
  });
});
$(function() {
  $(".J").click(function() {
      $(".J1").slideToggle("");
  });
});
//手紙
$(function() {
  $(".K").click(function() {
      $(".K1").slideToggle("");
  });
});
$(function() {
  $(".L").click(function() {
      $(".L1").slideToggle("");
  });
});
$(function() {
  $(".M").click(function() {
      $(".M1").slideToggle("");
  });
});
$(function() {
  $(".N").click(function() {
      $(".N1").slideToggle("");
  });
});
$(function() {
  $(".O").click(function() {
      $(".O1").slideToggle("");
  });
});
//チャット
$(function() {
  $(".P").click(function() {
      $(".P1").slideToggle("");
  });
});
$(function() {
  $(".Q").click(function() {
      $(".Q1").slideToggle("");
  });
});
$(function() {
  $(".R").click(function() {
      $(".R1").slideToggle("");
  });
});
$(function() {
  $(".S").click(function() {
      $(".S1").slideToggle("");
  });
});
$(function() {
  $(".T").click(function() {
      $(".T1").slideToggle("");
  });
});