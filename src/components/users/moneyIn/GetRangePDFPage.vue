<template>
  <q-page class="q-pa-md">
    <!-- <div class="text-black text-h4">Search User</div>
    <q-separator /> -->
    <div class="q-gutter-y-md" fullwidth>
      <!-- <div class="q-pa-sm">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="row">
              <p class="col-2 text-center text-primary">From :</p>
              <q-date
                class="col-9 q-ma-sm"
                v-model="startDate"
                mask="YYYY-MM-DD"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="row">
              <p class="col-2 text-center text-primary">To :</p>
              <q-date
                class="col-9 q-ma-sm"
                v-model="endDate"
                mask="YYYY-MM-DD"
              />
            </div>
          </div>
        </div>
        <div class="q-gutter-y-md q-ma-sm">
          <q-btn
            class="bg-primary full-width text-white"
            @click="onSubmit()"
            :disable="stage"
            :loading="loading"
            fullwidth
            label="Get PDF"
          >
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Loading...
            </template>
          </q-btn>
        </div>
      </div> -->
      <div class="q-pa-md">
        <q-list>
          <q-expansion-item
            popup
            icon="account_tree"
            label="Process"
            header-class="text-primary"
          >
            <q-separator />
            <q-card>
              <q-card-section>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="row">
                      <p class="col-2 text-center text-primary">From :</p>
                      <q-date
                        class="col-9 q-ma-sm"
                        v-model="processStartDate"
                        mask="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="row">
                      <p class="col-2 text-center text-primary">To :</p>
                      <q-date
                        class="col-9 q-ma-sm"
                        v-model="processEndDate"
                        mask="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                </div>
                <div class="q-gutter-y-md q-ma-sm">
                  <q-btn
                    class="bg-primary full-width text-white"
                    @click="onProcessSubmit()"
                    :disable="processStartDate == '' && processEndDate == ''"
                    :loading="loading"
                    fullwidth
                    label="Get Process"
                  >
                    <template v-slot:loading>
                      <q-spinner-hourglass class="on-left" />
                      Loading...
                    </template>
                  </q-btn>
                  <!-- <q-btn
                    v-if="processData"
                    outline
                    class="bg-yellow full-width text-white"
                    @click="processReport('proccess_report')"
                    fullwidth
                    label="Process PDF Download"
                  >
                  </q-btn> -->
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-expansion-item
            popup
            icon="payments"
            label="Payment"
            header-class="text-primary"
          >
            <q-separator />
            <q-card>
              <q-card-section>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="row">
                      <p class="col-2 text-center text-primary">From :</p>
                      <q-date
                        class="col-9 q-ma-sm"
                        v-model="paymentStartDate"
                        mask="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="row">
                      <p class="col-2 text-center text-primary">To :</p>
                      <q-date
                        class="col-9 q-ma-sm"
                        v-model="paymentEndDate"
                        mask="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                </div>
                <div class="q-gutter-y-md q-ma-sm">
                  <q-btn
                    class="bg-primary full-width text-white"
                    @click="onPaymentSubmit()"
                    :disable="paymentStartDate == '' && paymentEndDate == ''"
                    :loading="loading"
                    fullwidth
                    label="Get Payment"
                  >
                    <template v-slot:loading>
                      <q-spinner-hourglass class="on-left" />
                      Loading...
                    </template>
                  </q-btn>
                  <!-- <q-btn
                    v-if="paymentData"
                    outline
                    class="bg-yellow full-width text-white"
                    @click="paymentReport('payment_report')"
                    fullwidth
                    label="Payment PDF Download"
                  >
                  </q-btn> -->
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-expansion-item
            popup
            icon="paid"
            label="Money In"
            header-class="text-primary"
          >
            <q-separator />
            <q-card>
              <q-card-section>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="row">
                      <p class="col-2 text-center text-primary">From :</p>
                      <q-date
                        class="col-9 q-ma-sm"
                        v-model="moneyInStartDate"
                        mask="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="row">
                      <p class="col-2 text-center text-primary">To :</p>
                      <q-date
                        class="col-9 q-ma-sm"
                        v-model="moneyInEndDate"
                        mask="YYYY-MM-DD"
                      />
                    </div>
                  </div>
                </div>
                <div class="q-gutter-y-md q-ma-sm">
                  <q-btn
                    class="bg-primary full-width text-white"
                    @click="onMoneyInSubmit()"
                    :disable="moneyInStartDate == '' && moneyInEndDate == ''"
                    :loading="loading"
                    fullwidth
                    label="Get Money In"
                  >
                    <template v-slot:loading>
                      <q-spinner-hourglass class="on-left" />
                      Loading...
                    </template>
                  </q-btn>
                  <!-- <q-btn
                    v-if="moneyInData"
                    outline
                    class="bg-yellow full-width text-white"
                    @click="moneyInReport('money_in_report')"
                    fullwidth
                    label="Money In PDF Download"
                  >
                  </q-btn> -->
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import { useUserStore } from "../../../stores/user-store";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const name = "GetRangePDFPage";

// const processDownload = ref(false);
// const paymentDownload = ref(false);
// const moneyInDownload = ref(false);
const loading = ref(false);
const $q = useQuasar();
// const da = ref([]);
const processData = ref([]);
const paymentData = ref([]);
const moneyInData = ref([]);
const processStartDate = ref("");
const processEndDate = ref("");
const paymentStartDate = ref("");
const paymentEndDate = ref("");
const moneyInStartDate = ref("");
const moneyInEndDate = ref("");
const useStore = useUserStore();

const onProcessSubmit = () => {
  loading.value = true;
  const token = useStore.getToken;

  api
    .get(`/process/range/${processStartDate.value}/${processEndDate.value}`, {
      // axios
      //   .get(`${base}/completed_work/${intake_id.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // console.log(response.data, "gotten process");
      const data = response.data.data;
      // processData.value = da;
      // quantity.value = response.data.total_quantity;
      // console.log(quantity.value, "quantity 1");

      // for (let da of da.value) {
      //   for (let key in da) {
      //     // 1. Check for removal first:
      //     if (key === "ID" || key === "CreatedAt" || key === "UpdatedAt") {
      //       delete da[key];
      //       continue; // Move to the next iteration to avoid unnecessary checks
      //     }

      //     // // 2. Handle null or 0 values:
      //     // if (da[key] === 0 || da[key] === null) {
      //     //   delete da[key];
      //     //   continue; // Move to the next iteration
      //     // }

      //     // // 3. Replace key with label if found in columns:
      //     // const matchingColumn = columns.find((column) => column.field === key);
      //     // if (matchingColumn) {
      //     //   da[matchingColumn.label] = da[key];
      //     //   delete da[key];
      //     // }
      //   }
      // }

      processData.value = data.reverse();
      // console.log(processData.value, "processData");
      // console.log(quantity.value, "quantity 2");
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Process PDF ready for download",
      });
      processReport("process_report");
      loading.value = false;
      processStartDate.value = "";
      processEndDate.value = "";
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Not found",
        icon: "report_problem",
      });
      loading.value = false;
    });
};

const onPaymentSubmit = () => {
  loading.value = true;
  const token = useStore.getToken;

  api
    .get(`/payment/range/${paymentStartDate.value}/${paymentEndDate.value}`, {
      // axios
      //   .get(`${base}/completed_work/${intake_id.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // console.log(response.data, "gotten it");
      const data = response.data.data;
      // quantity.value = response.data.total_quantity;
      // console.log(quantity.value, "quantity 1");

      // for (let da of da.value) {
      //   for (let key in da) {
      //     // 1. Check for removal first:
      //     if (key === "ID" || key === "CreatedAt" || key === "UpdatedAt") {
      //       delete da[key];
      //       continue; // Move to the next iteration to avoid unnecessary checks
      //     }

      //     // // 2. Handle null or 0 values:
      //     // if (da[key] === 0 || da[key] === null) {
      //     //   delete da[key];
      //     //   continue; // Move to the next iteration
      //     // }

      //     // // 3. Replace key with label if found in columns:
      //     // const matchingColumn = columns.find((column) => column.field === key);
      //     // if (matchingColumn) {
      //     //   da[matchingColumn.label] = da[key];
      //     //   delete da[key];
      //     // }
      //   }
      // }

      paymentData.value = data.reverse();
      // console.log(paymentData.value, "paymentData");
      // console.log(quantity.value, "quantity 2");
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Payment pdf ready for download",
      });
      paymentReport("payment_report");
      loading.value = false;
      paymentStartDate.value = "";
      paymentEndDate.value = "";
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Not found",
        icon: "report_problem",
      });
      loading.value = false;
    });
};

const onMoneyInSubmit = () => {
  loading.value = true;
  const token = useStore.getToken;

  api
    .get(`/money_in/range/${moneyInStartDate.value}/${moneyInEndDate.value}`, {
      // axios
      //   .get(`${base}/completed_work/${intake_id.value}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // console.log(response.data, "gotten it");
      const data = response.data.data;
      // quantity.value = response.data.total_quantity;
      // console.log(quantity.value, "quantity 1");

      // for (let da of da.value) {
      //   for (let key in da) {
      //     // 1. Check for removal first:
      //     if (key === "ID" || key === "CreatedAt" || key === "UpdatedAt") {
      //       delete da[key];
      //       continue; // Move to the next iteration to avoid unnecessary checks
      //     }

      //     // // 2. Handle null or 0 values:
      //     // if (da[key] === 0 || da[key] === null) {
      //     //   delete da[key];
      //     //   continue; // Move to the next iteration
      //     // }

      //     // // 3. Replace key with label if found in columns:
      //     // const matchingColumn = columns.find((column) => column.field === key);
      //     // if (matchingColumn) {
      //     //   da[matchingColumn.label] = da[key];
      //     //   delete da[key];
      //     // }
      //   }
      // }

      moneyInData.value = data.reverse();
      // console.log(moneyInData.value, "moneyInData");
      // console.log(quantity.value, "quantity 2");
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "thumb_up",
        message: "Money ready for download",
      });
      moneyInReport("money_in_report");
      loading.value = false;
      moneyInStartDate.value = "";
      moneyInEndDate.value = "";
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "bottom",
        message: "Not found",
        icon: "report_problem",
      });
      loading.value = false;
    });
};

function getFormattedDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // convert to 12-hour format

  const daySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // catch 11th-13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${daySuffix(
    day
  )}_of_${month}_${year}_${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")}${ampm}`;
}

function getFormattedDate2() {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // convert to 12-hour format

  const daySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // catch 11th-13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${daySuffix(
    day
  )} of ${month}, ${year}. ${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")}${ampm}`;
}

const processReport = (_type) => {
  // Create a new jsPDF instance
  const doc = new jsPDF({
    orientation: "landscape",
    // unit: "in",
    // format: [4, 2]
  });

  // Use autoTable to create the main table
  const date = getFormattedDate();
  const actualData = getFormattedDate2();

  // doc.addImage("src/assets/logo.png", "PNG", 10, 10, 60, 30);
  // doc.addImage("src/assets/a3.jpeg", "JPEG", 10, 10, 60, 30);
  doc.addImage("src/assets/Six_Stars.jpeg", "JPEG", 15, 10, 60, 30);
  // Adding the logo as a header
  // const logo = "src/assets/logo.png";
  // doc.addImage(logo, "PNG", 10, 10, 50, 20);
  doc.setFont("times", "italic");
  doc.text(`Generated @: ${actualData}`, 280, 30, null, null, "right");

  doc.setFont("times", "normal");

  doc.setFont("helvetica", "bold");
  doc.text("Process Report", 150, 45, null, null, "center");
  doc.setLineWidth(1);
  doc.line(180, 48, 120, 48);
  doc.setFont("courier", "normal");

  // Extract the header and body data
  const header = [
    [
      "Intake ID",
      "Customer",
      "Customer Phone",
      "Staff Name",
      "Quantity",
      "Collected On",
      "Collection Date",
      "Current Status",
      "Washing Stage",
      "Ironing Stage",
      "Packing Stage",
      "Ready",
      "Customer Collected",
    ],
  ];
  const theBody = processData.value.map((item) => [
    item.intake_id,
    item.customer,
    item.customer_phone,
    item.staff_name,
    item.quantity,
    item.collected_on,
    item.collection_date,
    item.current_status,
    item.washing_stage,
    item.ironing_stage,
    item.packing_stage,
    item.ready,
    item.customer_collected,
  ]);
  // const theBody = theCustomerReport.value.map(item => [item.company_name, item.appointment_date + " " + item.appointment_time, item.package_name, "$" + item.package_price, item.zip_code, item.address, item.customers.name, item.customers.email, item.customers.phone_number, addOnServices.value, "$" + addOnAmount.value]);

  // Create a new jsPDF instance (landscape, millimeters, A4)
  // const doc = new jsPDF("l", "mm", "a4");

  // Add the table with the data
  autoTable(doc, {
    head: header,
    body: theBody,
    startY: 60, // Start the table 20mm from the top of the page
    // theme: "grid", // Grid style
    // tableWidth: "wrap",
    headStyles: {
      fillColor: "#3333cc", // Header background color
      textColor: "#FFFFFF", // Header text color (white)
      // halign: "center", // Center align text in the header
    },
    // columnStyles: {
    //   0: { cellWidth: "auto", halign: "center" }, // Auto width for the first column
    //   1: { cellWidth: "auto", halign: "center" }, // Auto width for the second column
    //   // 2: { cellWidth: "auto" }, // Auto width for the third column
    // },
  });

  // Footer
  // Get total number of pages
  const totalPages = doc.getNumberOfPages();

  // Loop through each page to add page numbers
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setFontSize(10);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - 20, pageHeight - 10, {
      align: "right",
    });
  }
  // Add footer text
  const date_ = new Date();
  const year = date_.getFullYear();
  const pageWidth = doc.internal.pageSize.getWidth();
  const footerText = `All Rights Reserved | SixStars DryCleaners Limited © ${year}`;

  // Center the footer text at the bottom of the page
  doc.text(footerText, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, {
    align: "center",
  });

  // Save the PDF
  doc.save(_type + date + ".pdf");
  paymentData.value = [];
  moneyInData.value = [];
  processData.value = [];
};

const paymentReport = (_type) => {
  // Create a new jsPDF instance
  const doc = new jsPDF({
    orientation: "landscape",
    // unit: "in",
    // format: [4, 2]
  });

  // Use autoTable to create the main table
  const date = getFormattedDate();
  const actualData = getFormattedDate2();

  // doc.addImage("src/assets/logo.png", "PNG", 10, 10, 60, 30);
  // doc.addImage("src/assets/a3.jpeg", "JPEG", 10, 10, 60, 30);
  doc.addImage("src/assets/Six_Stars.jpeg", "JPEG", 15, 10, 60, 30);
  // Adding the logo as a header
  // const logo = "src/assets/logo.png";
  // doc.addImage(logo, "PNG", 10, 10, 50, 20);
  doc.setFont("times", "italic");
  doc.text(`Generated @: ${actualData}`, 280, 30, null, null, "right");

  doc.setFont("times", "normal");

  doc.setFont("helvetica", "bold");
  doc.text("Payment Report", 150, 45, null, null, "center");
  doc.setLineWidth(1);
  doc.line(180, 48, 120, 48);
  doc.setFont("courier", "normal");

  // Extract the header and body data
  const header = [
    [
      "Intake ID",
      "Customer",
      // "Customer Phone",
      "Staff Name",
      "Quantity",
      "Collected On",
      "Collection Date",
      "Discount",
      "Deposit",
      // "Deposit Type",
      "Balance",
      "Total Amount",
      "Paid",
      "Paid Status",
      // "Paid Type",
      "Customer Collected",
    ],
  ];
  const theBody = paymentData.value.map((item) => [
    item.intake_id,
    item.customer,
    // item.customer_phone,
    item.staff_name,
    item.quantity,
    item.collected_on,
    item.collection_date,
    item.discount,
    item.deposit,
    // item.deposit_type,
    item.balance,
    item.total_amount,
    item.paid,
    item.paid_status,
    // item.paid_type,
    item.customer_collected,
  ]);
  // const theBody = theCustomerReport.value.map(item => [item.company_name, item.appointment_date + " " + item.appointment_time, item.package_name, "$" + item.package_price, item.zip_code, item.address, item.customers.name, item.customers.email, item.customers.phone_number, addOnServices.value, "$" + addOnAmount.value]);

  // Create a new jsPDF instance (landscape, millimeters, A4)
  // const doc = new jsPDF("l", "mm", "a4");

  // Add the table with the data
  autoTable(doc, {
    head: header,
    body: theBody,
    startY: 60, // Start the table 20mm from the top of the page
    // theme: "grid", // Grid style
    // tableWidth: "wrap",
    headStyles: {
      fillColor: "#3333cc", // Header background color
      textColor: "#FFFFFF", // Header text color (white)
      // halign: "center", // Center align text in the header
    },
    // columnStyles: {
    //   0: { cellWidth: "auto", halign: "center" }, // Auto width for the first column
    //   1: { cellWidth: "auto", halign: "center" }, // Auto width for the second column
    //   // 2: { cellWidth: "auto" }, // Auto width for the third column
    // },
  });

  // Footer
  // Get total number of pages
  const totalPages = doc.getNumberOfPages();

  // Loop through each page to add page numbers
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setFontSize(10);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - 20, pageHeight - 10, {
      align: "right",
    });
  }
  // Add footer text
  const date_ = new Date();
  const year = date_.getFullYear();
  const pageWidth = doc.internal.pageSize.getWidth();
  const footerText = `All Rights Reserved | SixStars DryCleaners Limited © ${year}`;

  // Center the footer text at the bottom of the page
  doc.text(footerText, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, {
    align: "center",
  });

  // Save the PDF
  doc.save(_type + date + ".pdf");
  moneyInData.value = [];
  processData.value = [];
  paymentData.value = [];
};

const moneyInReport = (_type) => {
  // Create a new jsPDF instance
  const doc = new jsPDF({
    orientation: "landscape",
    // unit: "in",
    // format: [4, 2]
  });

  // Use autoTable to create the main table
  const date = getFormattedDate();
  const actualData = getFormattedDate2();

  // doc.addImage("src/assets/logo.png", "PNG", 10, 10, 60, 30);
  // doc.addImage("src/assets/a3.jpeg", "JPEG", 10, 10, 60, 30);
  doc.addImage("src/assets/Six_Stars.jpeg", "JPEG", 15, 10, 60, 30);
  // Adding the logo as a header
  // const logo = "src/assets/logo.png";
  // doc.addImage(logo, "PNG", 10, 10, 50, 20);
  doc.setFont("times", "italic");
  doc.text(`Generated @: ${actualData}`, 280, 30, null, null, "right");

  doc.setFont("times", "normal");

  doc.setFont("helvetica", "bold");
  doc.text("Money In Report", 150, 45, null, null, "center");
  doc.setLineWidth(1);
  doc.line(180, 48, 120, 48);
  doc.setFont("courier", "normal");

  // Extract the header and body data
  const header = [
    [
      "Intake ID",
      "Customer",
      "Staff Name",
      "Discount",
      "Total Amount",
      "Money In",
      "Money In Status",
      "Money In Type",
      "Logged In Date",
      // "Collected On",
      "Collection Date",
    ],
  ];
  const theBody = moneyInData.value.map((item) => [
    item.intake_id,
    item.customer,
    item.staff_name,
    item.discount,
    item.total_amount,
    item.money_in,
    item.money_in_status,
    item.money_in_type,
    item.logged_in_date,
    item.collected_on,
    item.collection_date,
  ]);
  // const theBody = theCustomerReport.value.map(item => [item.company_name, item.appointment_date + " " + item.appointment_time, item.package_name, "$" + item.package_price, item.zip_code, item.address, item.customers.name, item.customers.email, item.customers.phone_number, addOnServices.value, "$" + addOnAmount.value]);

  // Create a new jsPDF instance (landscape, millimeters, A4)
  // const doc = new jsPDF("l", "mm", "a4");

  // Add the table with the data
  autoTable(doc, {
    head: header,
    body: theBody,
    startY: 60, // Start the table 20mm from the top of the page
    // theme: "grid", // Grid style
    // tableWidth: "wrap",
    headStyles: {
      fillColor: "#3333cc", // Header background color
      textColor: "#FFFFFF", // Header text color (white)
      // halign: "center", // Center align text in the header
    },
    // columnStyles: {
    //   0: { cellWidth: "auto", halign: "center" }, // Auto width for the first column
    //   1: { cellWidth: "auto", halign: "center" }, // Auto width for the second column
    //   // 2: { cellWidth: "auto" }, // Auto width for the third column
    // },
  });

  // Footer
  // Get total number of pages
  const totalPages = doc.getNumberOfPages();

  // Loop through each page to add page numbers
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setFontSize(10);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - 20, pageHeight - 10, {
      align: "right",
    });
  }
  // Add footer text
  const date_ = new Date();
  const year = date_.getFullYear();
  const pageWidth = doc.internal.pageSize.getWidth();
  const footerText = `All Rights Reserved | SixStars DryCleaners Limited © ${year}`;

  // Center the footer text at the bottom of the page
  doc.text(footerText, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, {
    align: "center",
  });

  // Save the PDF
  doc.save(_type + date + ".pdf");
  processData.value = [];
  paymentData.value = [];
  moneyInData.value = [];
};
</script>

<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
.my-card-2
  width: 100%
.siz
  width: 100%
  max-width: 250px
  height: 100%
.siz1
  width: 250px
  max-width: 250px
  height: 150px
  margin-top: -8px
.bgPropfunds
  background-color: $propfunds
select
  margin-top: 10px
  margin-right: 10px
  padding: 15px 10px
  background: rgba(196, 196, 196, 0.1)
  border: 2px solid grey
  border-radius: 4px
  outline: none
  width: 540px
.btn2
  border: none
  border-radius: 3px
  font-weight: 500
  font-size: 18px
  height: 40px
  margin-right: 10px
  background-color: #001951
  color: white
  cursor: pointer
.is-s
  background-color: #001951
  color: white
</style>
