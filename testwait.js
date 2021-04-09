// ---
// apiVersion: "apps/v1"
// kind: "Deployment"
// metadata:
//   name: "markey-universe"
//   namespace: "default"
//   labels:
//     app: "markey-universe"
// spec:
//   replicas: 3
//   selector:
//     matchLabels:
//       app: "markey-universe"
//   template:
//     metadata:
//       labels:
//         app: "markey-universe"
//     spec:
//       containers:
//       - name: "market-universe-sha256-1"
//         image: "gcr.io/gentle-habitat-309914/market-universe@sha256:$GITHUB_SHA"
// ---
// apiVersion: "autoscaling/v2beta1"
// kind: "HorizontalPodAutoscaler"
// metadata:
//   name: "markey-universe-hpa-fdij"
//   namespace: "default"
//   labels:
//     app: "markey-universe"
// spec:
//   scaleTargetRef:
//     kind: "Deployment"
//     name: "markey-universe"
//     apiVersion: "apps/v1"
//   minReplicas: 1
//   maxReplicas: 5
//   metrics:
//   - type: "Resource"
//     resource:
//       name: "cpu"
//       targetAverageUtilization: 80