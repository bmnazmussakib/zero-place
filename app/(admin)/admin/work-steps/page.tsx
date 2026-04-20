import connectDB from "@/lib/db";
import { WorkStep as WorkStepModel } from "@/models/Utility";
import { 
  CheckCircle,
  GripVertical
} from "lucide-react";
import WorkStepHeader from "./WorkStepHeader";
import WorkStepActions from "./WorkStepActions";

async function getWorkSteps() {
  await connectDB();
  const steps = await WorkStepModel.find().sort({ order: 1 }).lean();
  return steps.map(step => ({
    ...step,
    _id: step._id.toString()
  }));
}

export default async function AdminWorkStepsPage() {
  const steps = await getWorkSteps();

  return (
    <div className="space-y-10">
      <WorkStepHeader />

      <div className="bg-white rounded-md border border-primary/10 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-primary/5">
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6 px-6">Order</th>
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6">Step Content</th>
                <th className="bg-transparent text-slate-400 font-bold uppercase tracking-widest text-[10px] py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step: any, index: number) => (
                <tr key={step._id.toString()} className="group hover:bg-primary/5 transition-colors border-b border-primary/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <GripVertical className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab hover:text-slate-500" />
                      <span className="text-xl font-black font-heading text-slate-900/10 group-hover:text-slate-900/20 transition-colors">{index + 1}</span>
                    </div>
                  </td>
                  <td className="py-4 min-w-[300px]">
                    <div className="flex items-start gap-4 pr-12">
                        <div className="w-10 h-10 rounded-md bg-primary/5 flex items-center justify-center text-primary/40 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                             <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-slate-900 leading-tight transition-colors">{step.title}</h4>
                            <p className="text-sm text-slate-500 max-w-xl line-clamp-2">{step.description}</p>
                            <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest pt-1">Icon: {step.icon}</p>
                        </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <WorkStepActions step={step} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {steps.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-primary/5 rounded border border-primary/10 flex items-center justify-center text-slate-300 mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">No work steps defined</p>
          </div>
        )}
      </div>
    </div>
  );
}
