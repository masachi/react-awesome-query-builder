import React from "react";
import FieldSelect from "../components/widgets/antd/core/FieldSelect";
import Switch from "../components/widgets/antd/core/Switch";
import Button from "../components/widgets/antd/core/Button";
import ButtonGroup from "../components/widgets/antd/core/ButtonGroup";
import ValueSources from "../components/widgets/antd/core/ValueSources";
import Provider from "../components/widgets/antd/core/Provider";
import Conjs from "../components/widgets/antd/core/Conjs";
import confirm from "../components/widgets/antd/core/confirm";

export const settings = {
  formatField: (field, parts, label2, fieldDefinition, config, isForDisplay) => {
    if (isForDisplay)
      return label2;
    else
      return field;
  },

  renderField: (props) => <FieldSelect {...props} />,
  renderOperator: (props) => <FieldSelect {...props} />,
  renderFunc: (props) => <FieldSelect {...props} />,
  renderConjs: (props) => <Conjs {...props} />,
  renderSwitch: (props) => <Switch {...props} />,
  renderButton: (props) => <Button {...props} />,
  renderButtonGroup: (props) => <ButtonGroup {...props} />,
  renderProvider: (props) => <Provider {...props} />,
  renderValueSources: (props) => <ValueSources {...props} />,
  renderConfirm: confirm,
  renderSwitchPrefix: () => <>{"Conditions"}</>,

  valueSourcesInfo: {
    value: {},
  },
  fieldSeparator: ".",
  fieldSeparatorDisplay: ".",
  renderSize: "small",
  maxLabelsLength: 100,
  canReorder: true,
  canRegroup: true,
  showLock: false,
  canDeleteLocked: false,
  showNot: true,
  canLeaveEmptyGroup: true,
  shouldCreateEmptyGroup: false,
  forceShowConj: false,
  canShortMongoQuery: true,
  removeEmptyGroupsOnLoad: true,
  removeIncompleteRulesOnLoad: true,
  removeInvalidMultiSelectValuesOnLoad: true,
  groupActionsPosition: "topRight", // oneOf [topLeft, topCenter, topRight, bottomLeft, bottomCenter, bottomRight]
  setOpOnChangeField: ["keep", "default"], // 'default' (default if present), 'keep' (keep prev from last field), 'first', 'none'
  groupOperators: ["some", "all", "none"],

  convertableWidgets: {
    "number": ["slider", "rangeslider"],
    "slider": ["number", "rangeslider"],
    "rangeslider": ["number", "slider"],
    "text": ["textarea"],
    "textarea": ["text"]
  },

  // localization
  locale: {
    moment: "en",
  },
  valueLabel: "Value",
  valuePlaceholder: "Value",
  fieldLabel: "Field",
  operatorLabel: "Operator",
  funcLabel: "Function",
  fieldPlaceholder: "Select field",
  funcPlaceholder: "Select function",
  operatorPlaceholder: "Select operator",
  lockLabel: "Lock",
  lockedLabel: "Locked",
  deleteLabel: null,
  addGroupLabel: "Add group",
  addCaseLabel: "Add condition",
  addDefaultCaseLabel: "Add default condition",
  defaultCaseLabel: "Default:",
  addRuleLabel: "Add rule",
  addSubRuleLabel: "Add sub rule",
  delGroupLabel: "",
  notLabel: "Not",
  valueSourcesPopupTitle: "Select value source",
  removeRuleConfirmOptions: null,
  removeGroupConfirmOptions: null,

  defaultGroupConjunction: "AND",
  jsonLogic: {
    groupVarKey: "var",
    altVarKey: "var",
    lockedOp: "locked"
  }
};
