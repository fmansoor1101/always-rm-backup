export const visitFormTemplate =

  [{
    type: "panel",
    input: false,
    title: "",
    theme: "default",
    components: [{
      clearOnHide: false,
      key: "panelWell",
      input: false,
      components: [{
        autofocus: false,
        input: true,
        tableView: true,
        label: "Store Status",
        key: "panelWellStoreStatus",
        placeholder: "",
        data: {values: [{
            value: "active",
            label: "Active",
            $$hashKey: "object:747"
          }, {
            value: "inactive",
            label: "Inactive",
            $$hashKey: "object:776"
          }],
          json: "",
          url: "",
          resource: "",
          custom: ""
        },
        dataSrc: "values",
        valueProperty: "",
        defaultValue: "",
        refreshOn: "",
        filter: "",
        authenticate: false,
        template: "<span>{{ item.label }}</span>",
        multiple: false,
        protected: false,
        unique: false,
        persistent: true,
        hidden: false,
        clearOnHide: true,
        validate: {
          required: false
        },
        type: "select",
        $$hashKey: "object:640",
        labelPosition: "top",
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {}
      }, {
        input: true,
        tableView: true,
        inputType: "text",
        inputMask: "",
        label: "Visit Number",
        key: "lastName",
        placeholder: "",
        prefix: "",
        suffix: "",
        multiple: false,
        defaultValue: "",
        protected: false,
        unique: false,
        persistent: true,
        validate: {
          required: false,
          minLength: "",
          maxLength: "",
          pattern: "",
          custom: "",
          customPrivate: false
        },
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        type: "textfield",
        autofocus: false,
        hidden: false,
        clearOnHide: true,
        spellcheck: true,
        $$hashKey: "object:811",
        labelPosition: "top",
        tags: [],
        properties: {}
      }],
      tableView: false,
      type: "well",
      $$hashKey: "object:543",
      hideLabel: true,
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {},
      label: "panelWell"
    }],
    $$hashKey: "object:234",
    clearOnHide: false,
    tableView: false,
    hideLabel: true,
    key: "panel",
    breadcrumb: "default",
    tags: [],
    conditional: {
      show: "",
      when: null,
      eq: ""
    },
    properties: {},
    label: "panel"
  }, {
    type: "panel",
    title: "Step 1: RSPs",
    components: [{
      clearOnHide: false,
      key: "page2Well",
      input: false,
      components: [{
        autofocus: false,
        input: true,
        tableView: true,
        inputType: "text",
        inputMask: "",
        label: "No. of RSPs on duty during visit",
        key: "page2WellNoofRsPsondutyduringvisit",
        placeholder: "",
        prefix: "",
        suffix: "",
        multiple: false,
        defaultValue: "",
        protected: false,
        unique: false,
        persistent: true,
        hidden: false,
        clearOnHide: true,
        spellcheck: true,
        validate: {
          required: false,
          minLength: "",
          maxLength: "",
          pattern: "",
          custom: "",
          customPrivate: false
        },
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        type: "textfield",
        labelPosition: "top",
        tags: [],
        properties: {},
        $$hashKey: "object:2045"
      }],
      tableView: false,
      type: "well",
      $$hashKey: "object:1538",
      hideLabel: true,
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {},
      label: "page2Well",
      isNew: false
    }, {
      clearOnHide: false,
      key: "page2Panel",
      input: false,
      title: "Store Information",
      theme: "default",
      tableView: false,
      components: [{
        clearOnHide: false,
        input: false,
        key: "page2PanelTable",
        numRows: 1,
        numCols: 2,
        rows: [[{components: [{
            autofocus: false,
            input: true,
            tableView: true,
            inputType: "text",
            inputMask: "",
            label: "Manager Name",
            key: "page2PanelTableManagerName",
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            defaultValue: "",
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            spellcheck: true,
            validate: {
              required: false,
              minLength: "",
              maxLength: "",
              pattern: "",
              custom: "",
              customPrivate: false
            },
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            type: "textfield",
            labelPosition: "top",
            tags: [],
            properties: {},
            $$hashKey: "object:7542"
          }],
          $$hashKey: "object:7532"
        }, {components: [{
            autofocus: false,
            input: true,
            tableView: true,
            inputType: "text",
            inputMask: "",
            label: "Manager Contact",
            key: "page2PanelTableManagerContact",
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            defaultValue: "",
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            spellcheck: true,
            validate: {
              required: false,
              minLength: "",
              maxLength: "",
              pattern: "",
              custom: "",
              customPrivate: false
            },
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            type: "textfield",
            labelPosition: "top",
            tags: [],
            properties: {},
            $$hashKey: "object:7546"
          }],
          $$hashKey: "object:7533"
        }]],
        header: [],
        caption: "",
        striped: false,
        bordered: false,
        hover: false,
        condensed: false,
        tableView: false,
        type: "table",
        hideLabel: true,
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {},
        label: "page2PanelTable",
        $$hashKey: "object:7524"
      }],
      type: "panel",
      breadcrumb: "default",
      $$hashKey: "object:6695",
      hideLabel: true,
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {},
      label: "page2Panel",
      isNew: false
    }, {
      autofocus: false,
      input: true,
      tree: true,
      components: [{
        clearOnHide: false,
        input: false,
        key: "page2CurrentRspListTable",
        numRows: 4,
        numCols: 1,
        rows: [[{components: [{
            autofocus: false,
            input: true,
            tableView: true,
            inputType: "text",
            inputMask: "",
            label: "Name",
            key: "page2CurrentRspListTableName",
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            defaultValue: "",
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            spellcheck: true,
            validate: {
              required: false,
              minLength: "",
              maxLength: "",
              pattern: "",
              custom: "",
              customPrivate: false
            },
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            type: "textfield",
            labelPosition: "top",
            tags: [],
            properties: {},
            $$hashKey: "object:8885"
          }],
          $$hashKey: "object:8882"
        }], [{components: [{
            autofocus: false,
            input: true,
            tableView: true,
            inputType: "text",
            inputMask: "",
            label: "Email",
            key: "page2CurrentRspListTableEmail",
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            defaultValue: "",
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            spellcheck: true,
            validate: {
              required: false,
              minLength: "",
              maxLength: "",
              pattern: "",
              custom: "",
              customPrivate: false
            },
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            type: "textfield",
            labelPosition: "top",
            tags: [],
            properties: {},
            $$hashKey: "object:8897"
          }],
          $$hashKey: "object:8894"
        }], [{components: [{
            autofocus: false,
            input: true,
            tableView: true,
            inputType: "text",
            inputMask: "",
            label: "Contact Number",
            key: "page2CurrentRspListTableContactNumber",
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            defaultValue: "",
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            spellcheck: true,
            validate: {
              required: false,
              minLength: "",
              maxLength: "",
              pattern: "",
              custom: "",
              customPrivate: false
            },
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            type: "textfield",
            labelPosition: "top",
            tags: [],
            properties: {},
            $$hashKey: "object:8909"
          }],
          $$hashKey: "object:8906"
        }], [{components: [{
            autofocus: false,
            input: true,
            tableView: true,
            label: "IREP Registered",
            key: "page2CurrentRspListTableIrepRegistered",
            placeholder: "",
            data: {values: [{
                value: "yes",
                label: "Yes",
                $$hashKey: "object:8948"
              }, {
                value: "no",
                label: "No",
                $$hashKey: "object:8949"
              }],
              json: "",
              url: "",
              resource: "",
              custom: ""
            },
            dataSrc: "values",
            valueProperty: "",
            defaultValue: "",
            refreshOn: "",
            filter: "",
            authenticate: false,
            template: "<span>{{ item.label }}</span>",
            multiple: false,
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            validate: {
              required: false
            },
            type: "select",
            labelPosition: "top",
            tags: [],
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            properties: {},
            $$hashKey: "object:8921"
          }],
          $$hashKey: "object:8918"
        }]],
        header: [],
        caption: "",
        striped: false,
        bordered: false,
        hover: false,
        condensed: false,
        tableView: false,
        type: "table",
        $$hashKey: "object:2374",
        inDataGrid: true,
        hideLabel: true,
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {
          itemTitle: "RSP"
        },
        label: "page2CurrentRspListTable",
        lockKey: true
      }],
      tableView: true,
      label: "Current RSP List",
      key: "page2CurrentRspList",
      protected: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      type: "datagrid",
      addAnotherPosition: "bottom",
      $$hashKey: "object:1837",
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {
        itemTitle: "RSP"
      },
      addAnother: "ADD NEW RSP",
      hideLabel: false,
      lockKey: true
    }],
    input: false,
    key: "page2",
    $$hashKey: "object:1252",
    clearOnHide: false,
    theme: "default",
    tableView: false,
    hideLabel: true,
    breadcrumb: "default",
    tags: [],
    conditional: {
      show: "",
      when: null,
      eq: ""
    },
    properties: {},
    label: "page2"
  }, {
    type: "panel",
    title: "Step 3: Training",
    components: [{
      clearOnHide: false,
      key: "page3Fieldset",
      input: false,
      tableView: false,
      legend: "Training Attendence",
      components: [{
        autofocus: false,
        input: true,
        tableView: true,
        inputType: "text",
        inputMask: "",
        label: "Total Attendees in Training",
        key: "page3FieldsetTotalAttendeesinTraining",
        placeholder: "",
        prefix: "",
        suffix: "",
        multiple: false,
        defaultValue: "",
        protected: false,
        unique: false,
        persistent: true,
        hidden: false,
        clearOnHide: true,
        spellcheck: true,
        validate: {
          required: false,
          minLength: "",
          maxLength: "",
          pattern: "",
          custom: "",
          customPrivate: false
        },
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        type: "textfield",
        $$hashKey: "object:3786",
        labelPosition: "top",
        tags: [],
        properties: {}
      }, {
        autofocus: false,
        input: true,
        tableView: true,
        inputType: "text",
        inputMask: "",
        label: "IREP Courses in Store",
        key: "page3FieldsetIrepCoursesinStore",
        placeholder: "",
        prefix: "",
        suffix: "",
        multiple: false,
        defaultValue: "",
        protected: false,
        unique: false,
        persistent: true,
        hidden: false,
        clearOnHide: true,
        spellcheck: true,
        validate: {
          required: false,
          minLength: "",
          maxLength: "",
          pattern: "",
          custom: "",
          customPrivate: false
        },
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        type: "textfield",
        $$hashKey: "object:3970",
        labelPosition: "top",
        tags: [],
        properties: {}
      }],
      type: "fieldset",
      $$hashKey: "object:3637",
      hideLabel: true,
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {},
      label: "page3Fieldset"
    }, {
      autofocus: false,
      input: true,
      tree: true,
      components: [{
        clearOnHide: false,
        input: false,
        key: "page3TrainingCourseTable",
        numRows: 1,
        numCols: 2,
        rows: [[{components: [{
            autofocus: false,
            input: true,
            tableView: true,
            label: "Training Course",
            key: "page3TrainingCourseTableTrainingCourse",
            placeholder: "",
            data: {values: [{
                value: "optane",
                label: "Optane",
                $$hashKey: "object:5432"
              }, {
                value: "10thGen",
                label: "10th Gen",
                $$hashKey: "object:5473"
              }, {
                value: "competitorAnalysis",
                label: "Competitor Analysis",
                $$hashKey: "object:5477"
              }, {
                value: "someOtherCourse",
                label: "Some other course",
                $$hashKey: "object:5481"
              }],
              json: "",
              url: "",
              resource: "",
              custom: ""
            },
            dataSrc: "values",
            valueProperty: "",
            defaultValue: "",
            refreshOn: "",
            filter: "",
            authenticate: false,
            template: "<span>{{ item.label }}</span>",
            multiple: false,
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            validate: {
              required: false
            },
            type: "select",
            $$hashKey: "object:5329",
            labelPosition: "top",
            tags: [],
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            properties: {}
          }],
          $$hashKey: "object:4638"
        }, {components: [{
            autofocus: false,
            input: true,
            tableView: true,
            inputType: "text",
            inputMask: "",
            label: "Attendance",
            key: "page3TrainingCourseTableAttendance",
            placeholder: "",
            prefix: "",
            suffix: "",
            multiple: false,
            defaultValue: "",
            protected: false,
            unique: false,
            persistent: true,
            hidden: false,
            clearOnHide: true,
            spellcheck: true,
            validate: {
              required: false,
              minLength: "",
              maxLength: "",
              pattern: "",
              custom: "",
              customPrivate: false
            },
            conditional: {
              show: "",
              when: null,
              eq: ""
            },
            type: "textfield",
            $$hashKey: "object:5526",
            labelPosition: "top",
            tags: [],
            properties: {}
          }],
          $$hashKey: "object:4639"
        }]],
        header: [],
        caption: "",
        striped: false,
        bordered: false,
        hover: false,
        condensed: false,
        tableView: false,
        type: "table",
        $$hashKey: "object:4626",
        inDataGrid: true,
        hideLabel: true,
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {},
        label: "page3TrainingCourseTable"
      }],
      tableView: true,
      label: "Training Course",
      key: "page3TrainingCourse",
      protected: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      type: "datagrid",
      addAnotherPosition: "bottom",
      $$hashKey: "object:4156",
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {},
      addAnother: "ADD COURSE"
    }, {
      clearOnHide: false,
      key: "page3Well",
      input: false,
      components: [{
        autofocus: false,
        input: true,
        inputType: "checkbox",
        tableView: true,
        label: "IPOX/RXT Installation Images",
        dataGridLabel: false,
        key: "page3WellIpoxrxtInstallationImages",
        defaultValue: false,
        protected: false,
        persistent: true,
        hidden: false,
        name: "",
        value: "",
        clearOnHide: true,
        validate: {
          required: false
        },
        type: "checkbox",
        labelPosition: "right",
        $$hashKey: "object:9370",
        hideLabel: false,
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {}
      }, {
        autofocus: false,
        input: true,
        tableView: true,
        label: "page3WellFile",
        key: "page3WellFile",
        image: false,
        imageSize: "200",
        placeholder: "",
        multiple: false,
        defaultValue: "",
        protected: false,
        persistent: true,
        hidden: false,
        clearOnHide: true,
        filePattern: "*",
        fileMinSize: "0KB",
        fileMaxSize: "1GB",
        type: "file",
        $$hashKey: "object:9760",
        labelPosition: "top",
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {},
        hideLabel: true
      }, {
        autofocus: false,
        input: true,
        tableView: true,
        label: "Description",
        key: "page3WellDescription",
        placeholder: "",
        prefix: "",
        suffix: "",
        rows: 3,
        multiple: false,
        defaultValue: "",
        protected: false,
        persistent: true,
        hidden: false,
        wysiwyg: false,
        clearOnHide: true,
        spellcheck: true,
        validate: {
          required: false,
          minLength: "",
          maxLength: "",
          pattern: "",
          custom: ""
        },
        type: "textarea",
        $$hashKey: "object:9562",
        labelPosition: "top",
        tags: [],
        conditional: {
          show: "",
          when: null,
          eq: ""
        },
        properties: {}
      }],
      tableView: false,
      type: "well",
      $$hashKey: "object:9230",
      hideLabel: true,
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: ""
      },
      properties: {},
      label: "page3Well"
    }],
    input: false,
    key: "page3",
    $$hashKey: "object:3517",
    clearOnHide: false,
    theme: "default",
    tableView: false,
    hideLabel: true,
    breadcrumb: "default",
    tags: [],
    conditional: {
      show: "",
      when: null,
      eq: ""
    },
    properties: {},
    label: "page3"
  }]